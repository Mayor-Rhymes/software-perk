'use client';

import React from 'react';
import Link from 'next/link';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // You can log the error to an error reporting service here
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
          <div className="max-w-md text-center">
            <h1 className="text-4xl font-alegreya font-bold mb-4">Oops!</h1>
            <p className="text-gray-600 mb-6">
              Something went wrong. We apologize for the inconvenience.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => this.setState({ hasError: false, error: null })}
                className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                Try Again
              </button>
              <div>
                <Link
                  href="/"
                  className="text-blue-500 hover:text-blue-600 transition-colors"
                >
                  Go back home
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
