import React, { createContext, useState, useContext } from 'react';
import Cookies from 'js-cookie';
import { db } from '../db/config';
import { namee, roleId } from '../db/user';
import { datte } from '../db/user';
import { date_string } from './AttendanceModal';

import { collection,orderBy, limit, getDocs,getDoc,where,query ,addDoc, Firestore, Timestamp,doc ,setDoc} from 'firebase/firestore';

export const getUserAttendanceByUserId = async () => {
    try {
      const q = query(
        collection(db, "attendance"),
        where("userid", "==", localStorage.getItem('userId')),
        orderBy("date", "desc"), // Order by date in descending order
        limit(1) // Limit the result to only one document (the latest)
      );
  
      const querySnapshot = await getDocs(q);
  
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const latestDocId = doc.id;
        localStorage.setItem('attendanceId', latestDocId);
        
  
        // Access the entire document's data
        // const latestDocumentData = doc.data();
        // Do something with latestDocumentData if needed
      });
    } catch (error) {
      console.error('Error getting documents:', error);
    }
  };
  
  // getUserAttendanceByUserId();
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // const [authenticated, setAuthenticated] = useState(false);
    // const [token, setToken] = useState('');

    // const login = (t) => {
    //     if (t != "") {
    //         setToken(token);
    //         // Implement your login logic here
    //         setAuthenticated(true);
    //         // sessionStorage.setItem('authToken', token);
    //         Cookies.set('authToken', token, { secure: true, sameSite: 'strict', expires: 1, })
    //         // Cookies.set('authToken', token, { secure: true, sameSite: 'strict', httpOnly: true });
    //         return true;
    //     }
    //     return false;
    // };

    // const logout = () => {
    //     // Implement your logout logic here
    //     // Cookies.remove('authToken');
    //     Cookies.remove('authToken');
    //     sessionStorage.removeItem('authToken');
    //     setToken('');
    //     setAuthenticated(false);
    // };
    const [token, setToken] = useState(Cookies.get('authToken') || '');
    const authenticated = !!token;

    const login = (t) => {
        if (t !== "") {
            setToken(t);
            Cookies.set('authToken', t, { secure: true, sameSite: 'strict', expires: 1 });
            getUserAttendanceByUserId()
            
            
            
            return true;
        }
        return false;
    };
    
    const logout = () => {
        
        Cookies.remove('authToken');
        setToken('');
        localStorage.clear()
        
        
    };

    let admin = false;
    // const [roleName, setRoleName] = useState('');
    const role = roleId;
    console.log('role name: ', role);
    console.log('role name: ', role);
    console.log('role name: ', role);
    if(role?.toLowerCase() === 'admin') {
        admin = true;
    }
    return (
        <AuthContext.Provider value={{ authenticated, login, logout, admin }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
