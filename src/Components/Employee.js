import { useEffect, useState } from "react";
import Popup from "./Popup";
import { getUser } from "../db/user";
const Employee = () => {
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
            const temp = await getUser();
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
            <h4 className="f-grow">Employee</h4>
            <Popup show={showPopup} onHide={handleHidePopup} BtnTitle={"Add"} title={"Add Employee"} />
        </div>
        <div className="tableHeight overflow-auto mt-3">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">name</th>
                        <th className="text-center" scope="col">Phone</th>
                        <th className="text-center" scope="col">Designation</th>
                        <th className="text-center" scope="col">Job Type</th>
                        <th className="text-center" scope="col">Timing</th>
                        <th className="text-center" scope="col">Joining</th>
                        <th className="text-center" scope="col">Actions</th>
                    </tr>
                </thead>

                <tbody >
                    {userData.map((item, index) => {
                        return <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.firstName +" "+item.lastName}</td>
                            <td className="text-center">{item.phone}</td>
                            <td className="text-center">{item.designation}</td>
                            <td className="text-center">{item.jobType}</td>
                            <td className="text-center">{item.timing}</td>
                            <td className="text-center">{item.joining}</td>
                            <td className="text-center"> <i className="bi bi-eye-fill bg-success text-success bg-opacity-10 px-2 py-1 rounded rounded-circle"></i> </td>
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
export default Employee