import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RouteSync = () => {
  const location = useLocation();

  useEffect(() => {
    window.parent.postMessage(
      {
        type: 'CHILD_ROUTE_CHANGE',
        path: location.pathname,
      },
      '*'
    );
  }, [location]);

  return null;
};

export default RouteSync;
