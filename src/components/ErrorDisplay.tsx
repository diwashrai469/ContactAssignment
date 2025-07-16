import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface ErrorDisplayProps {
  onRetry: () => void;
  onRefresh: () => void;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ onRetry, onRefresh }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-red-50 dark:bg-red-900/20 rounded-full mb-6 animate-pulse">
          <AlertTriangle className="w-16 h-16 text-red-400" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          Something went wrong
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mb-2 leading-relaxed">
          An unexpected error occurred. Please try again or contact support if the problem
          persists.
        </p>

        <div className="space-y-3 mt-8">
          <button
            onClick={onRetry}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>

          <button
            onClick={onRefresh}
            className="w-full px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Refresh Page
          </button>
        </div>

        <div className="mt-8 text-xs text-gray-400 dark:text-gray-500">
          Need help?{' '}
          <a
            href="mailto:support@example.com"
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorDisplay;
