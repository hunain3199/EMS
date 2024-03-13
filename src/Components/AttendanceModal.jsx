import React, { useEffect, useState } from 'react'
import { collection, getDocs,getDoc ,addDoc, Firestore, Timestamp,doc,updateDoc } from 'firebase/firestore';
import { db } from '../db/config';
import { getUser,namee,datte,getDatee } from '../db/user';
import toast, { Toaster } from 'react-hot-toast';

const leaveAttendance = async (leaveStatus) => {
    console.log('data inside addUser: ', leaveStatus);
    try {
        const userRef = doc(db, "User Table", localStorage.getItem("userId"));
        const docSnap = await getDoc(userRef);
        console.log("meee",docSnap)
        const usersCollection = collection(db, 'leave');
        
        const docRef = await addDoc(usersCollection, leaveStatus);
        localStorage.setItem("leaveId",docRef.id)
        console.log('Document written with ID: ', docRef.id);
        
        
    } catch (error) {
        console.error('Error adding document: ', error);
    }
};
// console.log("milad",namee)
const addAttendance = async (userData) => {
    console.log('data inside addUser: ', userData);
    try {
        console.log(userData);
        const userRef = doc(db, "User Table", localStorage.getItem("userId"));
        const docSnap = await getDoc(userRef);
        console.log("meee",docSnap)
        const usersCollection = collection(db, 'attendance');
        
        const docRef = await addDoc(usersCollection, userData);
        localStorage.setItem("attendanceId",docRef.id)
        console.log('Document written with ID: ', docRef.id);
        
        
    } catch (error) {
        console.error('Error adding document: ', error);
    }
};

// Create a new Date object
const currentDate = new Date();
export let date_string = currentDate.toDateString(); // Outputs: "Tue Dec 28 2023"

// Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
let currentDay = currentDate.getDay();

// You can also get the day as a string (e.g., "Sunday", "Monday", etc.)
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDayString = daysOfWeek[currentDate.getDay()];
const userid = localStorage.getItem('userId')
const docidd = localStorage.getItem('attendanceId')

const AttendanceModal = ({ show, close , mark, modalName }) => {
    const [leaveStartDate, setStartLeaveDate] = useState('');
    const [leaveEndDate, setEndLeaveDate] = useState('');
    const [error, setError] = useState('');
    const [reason,setReason] = useState('')

    const callfunctions = async (state)=>{
        // const newDate = new Date();
        // newDate = newDate.toDateString();
        const datte2 = await getDatee();
        console.log("miladrandi",datte2)
        
        if (userid == localStorage.getItem('userId') ){
            if (date_string != datte2 && modalName === "Mark Attendence"){
                mark(modalName)
                addAttendance(userAttendance)
                
            }
            else if (modalName === "Mark Left"){
                console.log()
                mark(modalName)
                update()
                
            }
            else if (date_string == datte2) {
                
                toast.success("You already marked the attendance")
                if(modalName === "Request Leave" && localStorage.getItem('userId')){
                    mark(modalName)
                    leaveAttendance(leaveStatus)
                }
            }
            
        } else {
            alert('User is not found!')
        }
        
        
        
    
    }

    
    const update = async()=>{
        try {
            const attendanceRef = doc(db, "attendance", localStorage.getItem("attendanceId"));
            await updateDoc(attendanceRef, {
                leaveTime: getTime()
              });
              
        } catch (error) {
            console.log(error)
        }
    }
    
    const getTime = () =>{
        const d = new Date();
        const dd = [d.getHours(), d.getMinutes(), d.getSeconds()].map((a)=>(a < 10 ? '0' + a : a));
        return dd.join(':');
    };
    const userAttendance = {
        attendance_status:"Present Marked",
        day:currentDayString,
        start_time: getTime(),
        date:date_string,
        name:namee,
        userid:userid
         // Other user data fields
    };
    const leaveStatus = {
        leave_status:"Pending",
        day:currentDayString,
        leave_time: getTime(),
        date:date_string,
        leaveStartDate:leaveStartDate,
        leaveEndDate:leaveEndDate,
        name:namee,
        userid:userid,
        reason:reason
         // Other user data fields
    };
    
    const userLeft = {
        stop_time:getTime()
    }
    const onBlurHandler = (value, name) => {
        if (value === '') {
            // alert("please fill required fields!");
            if (error.search(name) === -1) {
                setError(error + ", " + name);
            }
            // console.log(error.search(name))
        } else {
            setError(error.replace(", " + name, ""));
        }
    }
    
        
        
        
    const LeaveModal = () => {
        
        if (modalName === 'Request Leave') {
      return (
        <div>
          <div className="form-group ">
            <label htmlFor="leaveStartDate">Leave Start Date</label>
            <input type="date" className="form-control" id="leaveStartDate" onChange={(e) => setStartLeaveDate(e.target.value)} onBlur={(e) => onBlurHandler(e.target.value, "Leave Start Date")} />
        </div>
        <div className="form-group ">
            <label htmlFor="leaveEndDate">Leave End Date</label>
            <input type="date" className="form-control" id="leaveEndDate" onChange={(e) => setEndLeaveDate(e.target.value)} onBlur={(e) => onBlurHandler(e.target.value, "Leave End Date")} />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Reason:</label>
            <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e) => setReason(e.target.value)} onBlur={(e) => onBlurHandler(e.target.value, "Reason")}  placeholder="Give Reason here"/>
            </div>
        </div>
        
      )}
      return null
    };
    return (
        
        <div className="modal fade show" tabIndex="-1" role="dialog" style={show && {display: 'block'}}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{modalName}</h5>
                        <button type="button" className="close" onClick={() => close()} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="d-flex gap-2 flex-column">
                            <h4>Hi, {modalName} Here!</h4>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Code:</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Code"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Current time:</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" value={getTime()} disabled />
                            </div>
                            {LeaveModal()}
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={() => callfunctions()} >{modalName}</button>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    )
}

export default AttendanceModal
