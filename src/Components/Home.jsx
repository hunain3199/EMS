import { useState , useEffect } from "react"
import ProgressCircle from "./ProgressCircle"
import Timer from "./Timer"
import user from "../db/user"
import { monthlyAttendence,monthlyLeave } from "../db/user"
import AttendanceModal from "./AttendanceModal"
const Home = () => {
   const [mark,setMark] = useState(null);
   const [showAttendenceModal, setShowAttendenceModal] = useState(false);
   const [modalName, setModalName] = useState('');
   const handlemark = (i) =>{
    i === 'Mark Attendence' && setMark("Present Marked");
    i === 'Mark Left' && setMark("Left Marked");
    i === 'Request Leave' && setMark("Request Leave Pending");
    handleClose();
  }
   const handleClose = () => {
    setShowAttendenceModal(false);
    
  }
  const handleShow = (i) => {
    setShowAttendenceModal(true);
    setModalName(i);
  }
//    useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const userData = await user();
//         // Do something with userData
//         console.log(userData);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchData();
//   }, []);

    const [monthlyRecord, setMonthlyRecord] = useState(monthlyAttendence);
    const [monthlyLeaveRecord,setMonthlyLeaveRecord] = useState(monthlyLeave)


    return (


        <div className="d-flex flex-column gap-3 fw-bold mb-5 ">
            <div>
                <div className="">
                <h3>
                    Dashboard
                    </h3>
                </div>
                <div className="d-flex flex-row justify-content-center  align-items-center ">
                    <div style={{backgroundColor:"#f8f9fa",height:"155px",width:"380px"}} className="border d-flex flex-row gap-4 rounded-start  align-items-center  text-black px-5 py-5">
                    <div style={{width:'104px',height:'100px',backgroundColor:"#e8f3ee"}} className="rounded-circle  "><ProgressCircle percentage={mark=="Present Marked"?100:0} color={'rgb(25,135,84)'} /></div>
                    <div className="d-flex flex-column"><div>Today's Status</div> <div>{mark}</div> </div>
                    </div>
                    <div style={{backgroundColor:"#f8f9fa",height:"155px",width:"380px"}} className="border rounded-end text-black px-5 py-5 ">
                    <div className="d-flex flex-column py-1 px-5 "><div>Time Remaining</div> <div>{mark == "Present Marked"?<Timer/>:"Time Stopped"}</div></div>
                    </div>
                </div>

            </div>
            <div>
                <div className="font-weight-bold"><h3>Monthly Record</h3></div>
                <div className="d-flex flex-row gap-5 justify-content-center">
                    <div  style={{padding:"20px",backgroundColor:"#f8f9fa"}} className=" text-black justify-content-center   text-center rounded d-flex flex-column align-items-center">
                    <div style={{width: '150px',height:"150px",backgroundColor:"#e8f3ee"}} className="rounded-circle  "><ProgressCircle percentage={monthlyRecord.percent} color={'rgb(25,135,84)'} /></div>
                    <div className="mt-1">This Month <br/> Attendance</div>
                    <div>{monthlyRecord.attendence}</div>
                    </div>
                    <div style={{padding:"20px",backgroundColor:"#f8f9fa"}} className=" text-black justify-content-center   text-center rounded d-flex flex-column align-items-center ">
                    <div style={{width: '150px',height:"150px",backgroundColor:"#e8f3ee"}} className="rounded-circle "><ProgressCircle percentage={monthlyLeaveRecord.leave} color={'rgb(25,135,84)'} /></div>
                    <div className="mt-1">This Month <br/>Leaves</div>
                    <div>{monthlyLeaveRecord.leaveAttendence}</div>
                    </div>
                    <div style={{padding:"20px",backgroundColor:"#f8f9fa"}} className=" text-black justify-content-center   text-center rounded d-flex flex-column align-items-center">
                    <div style={{width: '150px',height:"150px",backgroundColor:"#e8f3ee"}} className="rounded-circle  "><ProgressCircle percentage={monthlyLeaveRecord.weekPercentage} color={'rgb(25,135,84)'}/></div>
                    <div className="mt-1">This Week <br/>Leaves</div>
                    <div>{monthlyLeaveRecord.week}</div>
                    </div>
                    <div style={{padding:"20px",backgroundColor:"#f8f9fa"}} className="text-black justify-content-center text-center rounded d-flex flex-column align-items-center">
                    <div style={{width: '150px',height:"150px",backgroundColor:"#e8f3ee"}} className="rounded-circle  "><ProgressCircle percentage={monthlyRecord.weekPercentage} color={'rgb(25,135,84)'}/></div>
                    <div className="mt-1">This Week <br/> Attendance</div>
                    <div>{monthlyRecord.week}</div>
                    </div>
                </div>
            </div>
            <div>
                <div className="font-weight-bold">
                    <h3>
                    Actions
                    
                    </h3>
                </div>
                <div className="d-flex flex-row justify-content-center gap-5 ">
                    <button style={{backgroundColor:"#f8f9fa"}} onClick={()=>handleShow('Mark Attendence')} className="fw-bold text-black py-2 px-5 rounded">Mark Attendance</button>
                    <button style={{backgroundColor:"#f8f9fa"}}  onClick={()=>handleShow('Mark Left')} className="fw-bold  text-black py-2 px-5  rounded">Mark Left</button>
                    <button style={{backgroundColor:"#f8f9fa"}} onClick={()=>handleShow("Request Leave")} className="fw-bold  text-black py-2 px-5  rounded">Request Leave</button>
                </div>

            </div>
            {showAttendenceModal && <AttendanceModal show={true} modalName={modalName} mark={handlemark} close={handleClose} />}
        </div>

    )
}

export default Home
