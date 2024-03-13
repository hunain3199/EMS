import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';


const PrivateRoute = () => {
  const { authenticated } = useAuth();
  console.log('authenticated: ', authenticated);
  return authenticated ? <Outlet/> : <Navigate to="/404" />;
}

export default PrivateRoute;
