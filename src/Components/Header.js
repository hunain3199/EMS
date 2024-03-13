import React from 'react';
import { useAuth } from './AuthContext';
import { signOutUser } from '../data/operations';
import { date_string } from './AttendanceModal';
import { datte } from '../db/user';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const LogOutHandler = async () => {
        console.log('logout called: ', logout);
        if (signOutUser()) {
            
            logout();
            navigate('/login');
            
            
        }
        // else if(signOutUser() && date_string != datte){
        //     logout();
        //     localStorage.re
        // }
    }
    return <>
        {/* <h1>header</h1> */}
        <nav className="navbar bg-body-tertiary shadow-sm position-fixed w-100 bg-white">
            <div className="container-fluid">
                <a className="navbar-brand "> <span className='btn btn-sm bg-success bg-opacity-25 me-2'><i className="bi bi-list"></i></span> Employee Management</a>
                {/* <button>logout</button> */}
                <div>
                    <span className='me-2 btn btn-sm rounded rounded-circle bg-success bg-opacity-10 text-secondary'>
                        <i className="bi bi-chat-dots-fill"></i>
                    </span>
                    <span className='me-2 btn btn-sm rounded rounded-circle bg-success bg-opacity-25 text-secondary' onClick={LogOutHandler}>
                        <i className="bi bi-box-arrow-right"></i>
                    </span>
                    {/* <button className="btn btn-success btn-sm" onClick={logOutHandler}> <i className="bi bi-box-arrow-right"></i> logout</button> */}
                </div>
            </div>
        </nav>
    </>
}
export default Header