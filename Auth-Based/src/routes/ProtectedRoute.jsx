import useAuth from '../hooks/useAuth'
import { Navigate , useLocation } from 'react-router-dom'

function ProtectedRoute({children}) {
const { user , loading } = useAuth();
const location = useLocation();

if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-200">
        Loading...
      </div>
    );
  }

if (!user) {
    return <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />;
  }
  return children;
}

export default ProtectedRoute