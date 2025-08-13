import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface PrivateRouteProps {
  children: ReactNode;
  skillerOnly?: boolean;
}

const PrivateRoute = ({ children, skillerOnly = false }: PrivateRouteProps) => {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to login if not authenticated, saving the return path
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  // If this route is for skillers only and user is not a skiller
  if (skillerOnly && !user?.isSkiller) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;