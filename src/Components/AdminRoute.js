import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import PrivateRoute from './PrivateRoute';


const AdminRoute = () => {
  const { admin } = useAuth();
  console.log('admin: ', admin);
  return admin ? <Outlet/> : <PrivateRoute/>;
  // return admin && <Outlet/>;
}

export default AdminRoute;
