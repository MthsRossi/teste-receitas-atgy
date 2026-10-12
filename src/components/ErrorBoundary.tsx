import React from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary capturou uma falha de renderização:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-[#FAF9F6] text-[#111827]">
          <div className="max-w-md w-full bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 text-center shadow-xl">
            <div className="w-14 h-14 mx-auto rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-4 border border-red-100">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <h1 className="text-xl sm:text-2xl font-black text-[#0B2545] tracking-tight">
              Ops! Tivemos um imprevisto
            </h1>

            <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Não se preocupe, seus dados estão seguros. Clique no botão abaixo para recarregar o conteúdo da página.
            </p>

            <div className="mt-6">
              <button
                type="button"
                onClick={this.handleReload}
                className="w-full py-3.5 px-6 text-sm font-bold text-white bg-[#16a34a] hover:bg-[#15803d] active:scale-[0.99] rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Recarregar Página</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
