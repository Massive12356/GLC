import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-primary-dark flex items-center justify-center p-4">
      <div className="text-center max-w-md mx-auto">
        <div className="text-6xl font-bold text-accent mb-4">404</div>
        <h1 className="text-2xl font-serif font-semibold text-white mb-4">Page Not Found</h1>
        <p className="text-secondary-light mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 bg-accent text-primary rounded-lg hover:bg-accent-light transition-colors font-semibold"
        >
          <Home className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;