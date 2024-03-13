import React, { Children, useState } from 'react';
import SideMenu from './SideMenu';
import Header from './Header';
import Employee from './Employee';
import ChatComponent from './ChatComponent';
import CrispChat from './CrispChat';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className='bg-success bg-opacity-10 h-300'>
      <Header />
      <div className={`container-fluid ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className="row">
          <SideMenu />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-blue h-300">
            <br />
            <br />
            <br />
            <p className='mt-4'>Dashboard / Employee</p>
            {/* <ChatComponent/> */}
            {children}
            <CrispChat />
          </main>
        </div>

        {/* Sidebar Toggle Button */}
        {/* <button
          className="btn btn-primary btn-sm btn-sidebar-toggle"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}

        </button> */}
      </div>
    </div>
  )

};

export default Dashboard;
