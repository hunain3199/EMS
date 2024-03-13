import { useEffect, useState } from "react";
import Popup from "./Popup";
import { getLeaveStatus } from "../db/user";
const LeaveStatus = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleShowPopup = () => {
        setShowPopup(true);
    };

    const handleHidePopup = () => {
        setShowPopup(false);
    };

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        async function getUserData() {
            const temp = await getLeaveStatus();
            // console.log('user from firebase: ', temp);
            setUserData(temp);
        }
        getUserData();
    }, [])

    // const data = [
    //     { firstName: "ahmed", lastName: "Raza", phone: "0332 2514785", timing:"6:00 - 2:00", jobType:"Internship", designation: "manager", joining: "2023-11-10" },
    //     { firstName: "ahmed", lastName: "Raza", phone: "0332 2514785", timing:"6:00 - 2:00", jobType:"Internship", designation: "manager", joining: "2023-11-10" },
    //     { firstName: "ahmed", lastName: "Raza", phone: "0332 2514785", timing:"6:00 - 2:00", jobType:"Internship", designation: "manager", joining: "2023-11-10" },
    //     { firstName: "ahmed", lastName: "Raza", phone: "0332 2514785", timing:"6:00 - 2:00", jobType:"Internship", designation: "manager", joining: "2023-11-10" },
    //     { firstName: "ahmed", lastName: "Raza", phone: "0332 2514785", timing:"6:00 - 2:00", jobType:"Internship", designation: "manager", joining: "2023-11-10" },
    //     { firstName: "ahmed", lastName: "Raza", phone: "0332 2514785", timing:"6:00 - 2:00", jobType:"Internship", designation: "manager", joining: "2023-11-10" },
    //     { firstName: "ahmed", lastName: "Raza", phone: "0332 2514785", timing:"6:00 - 2:00", jobType:"Internship", designation: "manager", joining: "2023-11-10" },
    //     { firstName: "ahmed", lastName: "Raza", phone: "0332 2514785", timing:"6:00 - 2:00", jobType:"Internship", designation: "manager", joining: "2023-11-10" },
    //     { firstName: "ahmed", lastName: "Raza", phone: "0332 2514785", timing:"6:00 - 2:00", jobType:"Internship", designation: "manager", joining: "2023-11-10" },
    //     { firstName: "ahmed", lastName: "Raza", phone: "0332 2514785", timing:"6:00 - 2:00", jobType:"Internship", designation: "manager", joining: "2023-11-10" }
    //     // profileImage
    //     // cnic
    //     // firstName
    //     // lastName
    //     // phone
    //     // email
    //     // guardianName
    //     // guardianCnic
    //     // guardianContact
    //     // address
    //     // qualification
    //     // joinDate
    //     // designation
    //     // jobType
    //     // noticePeriod
    //     // salary
    //     // timing
    // ]
    return <div className="bg-white p-1 my-4 rounded d-flex flex-column h-300 text-success">

        <div className="d-flex justify-content-between mt-1
     px-2">
            <h4 className="f-grow">Employee Leaves</h4>
            <Popup show={showPopup} onHide={handleHidePopup} BtnTitle={"Add"} title={"Add Employee"} />
        </div>
        <div className="tableHeight overflow-auto mt-3">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">name</th>
                        <th className="text-center" scope="col">UserId</th>
                        <th className="text-center" scope="col">Reason</th>
                        <th className="text-center" scope="col">LeaveStatus</th>
                        <th className="text-center" scope="col">LeaveStartDate</th>
                        <th className="text-center" scope="col">LeaveEndDate</th>
                        <th className="text-center" scope="col">Leave Time</th>
                    </tr>
                </thead>

                <tbody >
                    {userData.map((item, index) => {
                        return <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.name}</td>
                            <td className="text-center">{item.userid}</td>
                            <td className="text-center">{item.reason}</td>
                            <td className="text-center">{item.leave_status}</td>
                            <td className="text-center">{item.leaveStartDate}</td>
                            <td className="text-center">{item.leaveEndDate}</td>
                            <td className="text-center"> {item.leave_time} </td>
                        </tr>
                    })}
                </tbody>

            </table >
            {/* <div>
                <button className="btn btn-primary" onClick={handleShowPopup}>
                    Show Popup
                </button>

                <Popup show={showPopup} onHide={handleHidePopup} />
            </div> */}

        </div>
    </div >

}
export default LeaveStatus