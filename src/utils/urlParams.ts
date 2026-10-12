/**
 * Propagação dos parâmetros da URL (UTMs, src, fbclid, etc.) para o checkout.
 *
 * Os parâmetros de window.location.search são anexados a todos os links,
 * redirecionamentos, formulários, iframes e window.open de checkout.
 * Parâmetros que já existem no destino são preservados (não são sobrescritos).
 */

import { CONFIG } from '../config';

// Domínios de plataformas de checkout conhecidas, além dos configurados em CONFIG
const KNOWN_CHECKOUT_HOSTS = [
  'cakto.com.br',
  'kiwify.com.br',
  'kiwify.app',
  'hotmart.com',
  'eduzz.com',
  'monetizze.com.br',
  'perfectpay.com.br',
  'ticto.app',
  'greenn.com.br',
  'braip.com',
  'pagar.me',
];

const configuredCheckoutHosts = (): string[] =>
  [CONFIG.CHECKOUT_URL_BASIC, CONFIG.CHECKOUT_URL_DISCOUNTED, CONFIG.CHECKOUT_URL_PREMIUM]
    .map((u) => {
      try {
        return u ? new URL(u).hostname : '';
      } catch {
        return '';
      }
    })
    .filter(Boolean);

const toUrl = (url: string | URL): URL | null => {
  try {
    return new URL(String(url), window.location.href);
  } catch {
    return null;
  }
};

/** Verifica se a URL aponta para uma plataforma de checkout. */
export function isCheckoutUrl(url: string | URL | null | undefined): boolean {
  if (!url) return false;
  const parsed = toUrl(url);
  if (!parsed || !/^https?:$/.test(parsed.protocol)) return false;
  const host = parsed.hostname.toLowerCase();
  const hosts = [...configuredCheckoutHosts(), ...KNOWN_CHECKOUT_HOSTS];
  return hosts.some((h) => host === h || host.endsWith(`.${h}`));
}

/**
 * Retorna a URL de destino com os parâmetros da página atual anexados.
 * Parâmetros já presentes no destino têm prioridade e não são alterados.
 */
export function withUrlParams(url: string): string {
  const parsed = toUrl(url);
  if (!parsed) return url;
  const current = new URLSearchParams(window.location.search);
  current.forEach((value, key) => {
    if (!parsed.searchParams.has(key)) {
      parsed.searchParams.append(key, value);
    }
  });
  return parsed.toString();
}

/** Redireciona para a URL de checkout repassando os parâmetros da página. */
export function redirectWithParams(url: string): void {
  window.location.href = withUrlParams(url);
}

const patchAttr = (el: Element, attr: string) => {
  const value = el.getAttribute(attr);
  if (value && isCheckoutUrl(value)) {
    const next = withUrlParams(value);
    if (next !== toUrl(value)?.toString() || next !== value) {
      if (el.getAttribute(attr) !== next) el.setAttribute(attr, next);
    }
  }
};

/** Formulários GET substituem a query string da action, então os parâmetros viram campos ocultos. */
const patchForm = (form: HTMLFormElement, submitter?: HTMLElement | null) => {
  const action =
    (submitter && submitter.getAttribute('formaction')) || form.getAttribute('action') || '';
  if (!isCheckoutUrl(action)) return;

  const method = (
    (submitter && submitter.getAttribute('formmethod')) ||
    form.getAttribute('method') ||
    'get'
  ).toLowerCase();

  if (method === 'get') {
    const target = toUrl(action);
    const existing = new Set<string>();
    target?.searchParams.forEach((_, k) => existing.add(k));
    Array.from(form.elements).forEach((el) => {
      const name = (el as HTMLInputElement).name;
      if (name) existing.add(name);
    });
    new URLSearchParams(window.location.search).forEach((value, key) => {
      if (existing.has(key)) return;
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      input.setAttribute('data-url-param', 'true');
      form.appendChild(input);
      existing.add(key);
    });
    // Mantém também os parâmetros originais da action como campos ocultos
    target?.searchParams.forEach((value, key) => {
      if (form.querySelector(`input[data-action-param="${CSS.escape(key)}"]`)) return;
      if (Array.from(form.elements).some((el) => (el as HTMLInputElement).name === key)) return;
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      input.setAttribute('data-action-param', key);
      form.appendChild(input);
    });
  } else if (submitter && submitter.getAttribute('formaction')) {
    patchAttr(submitter, 'formaction');
  } else {
    patchAttr(form, 'action');
  }
};

const patchTree = (root: ParentNode) => {
  root.querySelectorAll?.('a[href], area[href]').forEach((el) => patchAttr(el, 'href'));
  root.querySelectorAll?.('iframe[src], frame[src], embed[src]').forEach((el) => patchAttr(el, 'src'));
  root.querySelectorAll?.('object[data]').forEach((el) => patchAttr(el, 'data'));
  root.querySelectorAll?.('form[action]').forEach((el) => {
    const method = (el.getAttribute('method') || 'get').toLowerCase();
    if (method !== 'get') patchAttr(el, 'action');
  });
  root.querySelectorAll?.('[formaction]').forEach((el) => patchAttr(el, 'formaction'));
  root.querySelectorAll?.('[data-href], [data-url], [data-checkout]').forEach((el) => {
    patchAttr(el, 'data-href');
    patchAttr(el, 'data-url');
    patchAttr(el, 'data-checkout');
  });
};

let installed = false;

/**
 * Instala a propagação global: links, botões, formulários, iframes, redirecionamentos e
 * window.open de checkout passam a carregar os parâmetros da página (window.location.search).
 */
export function installUrlParamPropagation(): void {
  if (installed || typeof window === 'undefined') return;
  installed = true;

  // Intercepta window.open
  const originalOpen = window.open.bind(window);
  window.open = ((url?: string | URL, ...rest: unknown[]) => {
    const next = url && isCheckoutUrl(url) ? withUrlParams(String(url)) : url;
    return (originalOpen as (...args: unknown[]) => Window | null)(next, ...rest);
  }) as typeof window.open;

  // Programmatic form.submit() não dispara o evento submit
  const originalSubmit = HTMLFormElement.prototype.submit;
  HTMLFormElement.prototype.submit = function (this: HTMLFormElement) {
    patchForm(this);
    return originalSubmit.call(this);
  };

  // Intercepta cliques e eventos de navegação antes de serem acionados por onClick / ouvintes nativos
  const onNavigate = (event: Event) => {
    if (!window.location.search) return;
    const target = event.target as Element | null;
    const el = target?.closest?.('a[href], area[href], [data-href], [data-url], [data-checkout], [formaction], button, [onclick]');
    if (!el) return;

    ['href', 'data-href', 'data-url', 'data-checkout', 'formaction'].forEach((attr) => patchAttr(el, attr));

    // Se o elemento tiver atributo onclick com URL de checkout em texto plano ou window.open / location
    const onclickAttr = el.getAttribute('onclick');
    if (onclickAttr && /https?:\/\//i.test(onclickAttr)) {
      const updatedOnclick = onclickAttr.replace(/https?:\/\/[^\s'"`,)]+/gi, (match) => {
        if (isCheckoutUrl(match)) {
          return withUrlParams(match);
        }
        return match;
      });
      if (updatedOnclick !== onclickAttr) {
        el.setAttribute('onclick', updatedOnclick);
      }
    }
  };

  document.addEventListener('pointerdown', onNavigate, true);
  document.addEventListener('mousedown', onNavigate, true);
  document.addEventListener('click', onNavigate, true);
  document.addEventListener('auxclick', onNavigate, true);
  document.addEventListener('contextmenu', onNavigate, true);

  // Formulários
  document.addEventListener(
    'submit',
    (event) => {
      const form = event.target as HTMLFormElement;
      if (form instanceof HTMLFormElement) {
        patchForm(form, (event as SubmitEvent).submitter);
      }
    },
    true
  );

  // Varredura inicial e observador contínuo para elementos adicionados dinamicamente
  if (window.location.search) {
    patchTree(document);
  }

  new MutationObserver((mutations) => {
    if (!window.location.search) return;
    for (const m of mutations) {
      if (m.type === 'attributes' && m.target instanceof Element && m.attributeName) {
        patchAttr(m.target, m.attributeName);
      }
      m.addedNodes.forEach((node) => {
        if (node instanceof Element) {
          patchTree(node);
          ['href', 'src', 'action', 'formaction', 'data'].forEach((attr) => {
            if (node.hasAttribute(attr) && !(node instanceof HTMLFormElement && attr === 'action')) {
              patchAttr(node, attr);
            }
          });
        }
      });
    }
  }).observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['href', 'src', 'formaction', 'data-href', 'data-url', 'data-checkout'],
  });
}
