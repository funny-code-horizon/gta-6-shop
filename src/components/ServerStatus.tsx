
import { useEffect } from 'react';

interface ServerStatusProps {
  statusCode: number;
}

const ServerStatus: React.FC<ServerStatusProps> = ({ statusCode }) => {
  useEffect(() => {
    // This will help with proper status code handling in production
    if (typeof window !== 'undefined' && window.history) {
      const currentState = window.history.state || {};
      window.history.replaceState(
        { ...currentState, statusCode }, 
        '', 
        window.location.pathname
      );
    }
  }, [statusCode]);

  return null;
};

export default ServerStatus;
