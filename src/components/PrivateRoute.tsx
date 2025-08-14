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
    try {
      localStorage.setItem('skillsphere_last_path', location.pathname + location.search);
    } catch {}
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  if (skillerOnly && !user?.isSkiller) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;