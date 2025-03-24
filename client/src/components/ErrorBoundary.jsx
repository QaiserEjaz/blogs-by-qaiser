import { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      errorMessage: null 
    };
  }

  static getDerivedStateFromError(error) {
    return { 
      hasError: true,
      errorMessage: error.message 
    };
  }

  resetError = () => {
    this.setState({ 
      hasError: false, 
      errorMessage: null 
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div 
          className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900"
          role="alert"
          aria-live="assertive"
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Something went wrong
            </h2>
            {this.state.errorMessage && (
              <p className="text-red-500 dark:text-red-400 mb-4">
                {this.state.errorMessage}
              </p>
            )}
            <button 
              onClick={this.resetError}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              aria-label="Try again"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }

  componentDidCatch(error, errorInfo) {
    // Replace with your error logging service
    this.logError(error, errorInfo);
  }

  logError = (error, errorInfo) => {
    // TODO: Implement proper error logging service
    // Example: Sentry, LogRocket, etc.
    console.error('Error caught by boundary:', error, errorInfo);
  };
}

export default ErrorBoundary;