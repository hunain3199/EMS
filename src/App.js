import './App.css';
import PrivateRoute from './Components/PrivateRoute';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import the BrowserRouter
import SignIn from './pages/SignIn';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Employee from './Components/Employee';
import LeaveStatus from './Components/LeaveStatus';
import NotFoundPage from './Components/NotFoundPage';
import { AuthProvider } from './Components/AuthContext';
import { roleId } from './db/user';
import AdminRoute from './Components/AdminRoute';


function App() {
  const role = roleId;
  console.log('role name app: ', role);
  console.log('role name: app', role);
  console.log('role name: app', role);
  return (
    <AuthProvider>
      <Router> {/* Wrap your entire application with BrowserRouter */}
        <Routes>
            <Route path="/login" element={<SignIn />} />
            <Route path="/signin" element={<SignIn />} />
              <Route element={<AdminRoute/>}>
                <Route path="/" element={<Dashboard><Home /></Dashboard>} />
                <Route path="/leave" element={<Dashboard><LeaveStatus /></Dashboard>} />
                <Route path="/employee" element={<Dashboard><Employee /></Dashboard>} />
              </Route>
            <Route element={<PrivateRoute/>}>
              <Route path="/" element={<Dashboard><Home /></Dashboard>} />
              <Route path="/leave" element={<Dashboard><LeaveStatus /></Dashboard>} />
              {/* <Route path="/chat" element={<Dashboard><ChatComponent /></Dashboard>} /> */}
            </Route>
            <Route path="404" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
