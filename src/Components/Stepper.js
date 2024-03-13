import { useEffect, useState } from "react";
import {addUser, rolenames} from "../db/user";

export const InformationForm = ({ nextStep }) => {
    
    // const [firstName, setFirstName] = useState("");
    const [profileImage, setProfileImage] = useState('');
    const [cnic, setCnic] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [guardianName, setGuardianName] = useState('');
    const [guardianCnic, setGuardianCnic] = useState('');
    const [guardianContact, setGuardianContact] = useState('');
    const [address, setAddress] = useState('');
    const [qualification, setQualification] = useState('');
    const [joinDate, setJoinDate] = useState('');
    const [designation, setDesignation] = useState('');
    const [jobType, setJobType] = useState('');
    const [roleId, setRoleId] = useState('');
    const [noticePeriod, setNoticePeriod] = useState('');
    const [salary, setSalary] = useState('');
    const [timing, setTiming] = useState('');
    const [error, setError] = useState('');
    let data;
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(error === ''){
             data = {
                profileImage: profileImage,
                cnic: cnic,
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                email: email,
                guardianName: guardianName,
                guardianCnic: guardianCnic,
                guardianContact: guardianContact,
                address: address,
                qualification: qualification,
                joinDate: joinDate,
                designation: designation,
                jobType: jobType,
                roleId: roleId,
                noticePeriod: noticePeriod,
                salary: salary,
                timing: timing,
            }
            console.log("submit data",data);
            addUser(localStorage.getItem('userId'),data);
        }
    }
    const [roleData, setRoleData] = useState([]);

    useEffect(() => {
        async function getRoleData() {
            const temp = await rolenames();
            
            // console.log('user from firebase: ', temp);
            setRoleData(temp);
            console.log(temp,"Hi")
        }
        getRoleData();
    }, [])

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
    
    console.log(data)
    return (
        <div>
            <h4 className='text-center'>Step 1: Information</h4>
            {/* Form fields for the information step */}
            <div className="container">
                <div className="alert alert-danger" role="alert" hidden={error !== '' ? false : true}>
                    <span hidden={error !== '' ? false : true} >please fill required fields: </span>
                    {error}
                </div>
                <hr />
                <h5>Employee Information</h5>
                <form>
                    <div className="form-group">
                        <label for="profileImage">Profile Image</label>
                        <input type="file" className="form-control" id="profileImage" onChange={(e) => setProfileImage(e.target.value)} onBlur={(e) => onBlurHandler(e.target.value, "Profile Image")}/>
                    </div>
                    <div className="form-group">
                        <label for="cnic">CNIC</label>
                        <input type="text" className="form-control" id="cnic" onChange={(e) => setCnic(e.target.value)} onBlur={(e) => onBlurHandler(e.target.value, "CNIC")}/>
                    </div>
                    <div className="form-row d-flex">
                        <div className="form-group w-100 me-1">
                            <label for="firstName">First Name</label>
                            <input type="text" className="form-control" id="firstName" onChange={(e) => setFirstName(e.target.value)} onBlur={(e) => onBlurHandler(e.target.value, "First Name")} />
                        </div>
                        <div className="form-group w-100 ms-1">
                            <label for="lastName">Last Name</label>
                            <input type="text" className="form-control" id="lastName" onChange={(e) => setLastName(e.target.value)} onBlur={(e) => onBlurHandler(e.target.value, "Last Name")} />
                        </div>
                    </div>
                    <div className="form-row d-flex">
                        <div className="form-group w-100 me-1">
                            <label for="phone">Phone</label>
                            <input type="tel" className="form-control" id="phone" onChange={(e) => setPhone(e.target.value)} onBlur={(e) => onBlurHandler(e.target.value, "Phone")} />
                        </div>
                        <div className="form-group w-100 ms-1">
                            <label for="email">Email</label>
                            <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} onBlur={(e) => onBlurHandler(e.target.value, "Email")} />
                        </div>
                    </div>
                    <hr />
                    <h5>Guardian Information</h5>
                    <div className="form-row d-flex">
                        <div className="form-group w-100 me-1">
                            <label for="guardianName">Guardian Name</label>
                            <input type="text" className="form-control" id="guardianName" onChange={(e) => setGuardianName(e.target.value)} onBlur={(e) => onBlurHandler(e.target.value, "Guardian Name")} />
                        </div>
                        <div className="form-group w-100 ms-1">
                            <label for="guardianCnic">Guardian CNIC</label>
                            <input type="text" className="form-control" id="guardianCnic" onChange={(e) => setGuardianCnic(e.target.value)} onBlur={(e) => onBlurHandler(e.target.value, "Guardian CNIC")} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="guardianContact">Guardian Contact</label>
                        <input type="tel" className="form-control" id="guardianContact" onChange={(e) => setGuardianContact(e.target.value)} onBlur={(e) => onBlurHandler(e.target.value, "Guardian Contact")} />
                    </div>
                    <div className="form-group">
                        <label for="address">Address</label>
                        <textarea className="form-control" id="address" rows="3" onChange={(e) => setAddress(e.target.value)} onBlur={(e) => onBlurHandler(e.target.value, "Address")}></textarea>
                    </div>
                    <hr />
                    <h5>Job Information</h5>
                    <div className="form-group">
                        <label for="qualification">Qualification</label>
                        {/* <input type="text" className="form-control" id="qualification" onChange={(e) => setQualification(e.target.value)} onBlur={(e) => onBlurHandler(e.target.value, "Qualification")}/> */}
                        {/* <label for="jobType">Job Type</label> */}
                        <select className="form-control" id="jobType" onChange={(e) => setQualification(e.target.value)} onBlur={(e) => onBlurHandler(e.target.value, "Job Type")}>
                            <option value="None">None</option>
                            <option value="Middle">Middle</option>
                            <option value="Matric">Matric</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Under-Graduate">Under-Graduate</option>
                            <option value="Graduate">Graduate</option>
                            <option value="post-Graduate">post-Graduate</option>
                            <option value="Master's">Master's</option>
                            <option value="PHP">PHP</option>
                        </select>
                    </div>
                    <div className="form-row d-flex">
                        <div className="form-group w-100 me-1">
                            <label for="joinDate">Join Date</label>
                            <input type="date" className="form-control" id="joinDate" onChange={(e) => setJoinDate(e.target.value)} onBlur={(e) => onBlurHandler(e.target.value, "Join Date")} />
                        </div>
                        <div className="form-group w-100 ms-1">
                            <label for="designation">Designation</label>
                            <input type="text" className="form-control" id="designation" onChange={(e) => setDesignation(e.target.value)} onBlur={(e) => onBlurHandler(e.target.value, "Designation")} />
                        </div>
                    </div>
                    <div className="form-row d-flex">
                        <div className="form-group w-100 me-1">
                            <label for="jobType">Job Type</label>
                            <select className="form-control" id="jobType" onChange={(e) => setJobType(e.target.value)} onBlur={(e) => onBlurHandler(e.target.value, "Job Type")}>
                                <option value="full-time">Full-Time</option>
                                <option value="part-time">Part-Time</option>
                                <option value="part-time">Intership</option>
                            </select>
                        </div>
                        <div className="form-group w-100 me-1">
                            <label for="jobType">Role ID</label>
                            <select className="form-control" id="jobType" onChange={(e) => setRoleId(e.target.value)} onBlur={(e) => onBlurHandler(e.target.value, "Job Type")}>
                                {roleData.map((item)=>{
                                    return <option  value={item}>{item}</option>
                                })}
                            </select>
                           
                                
                                
                                    
                                
                        </div>
                        <div className="form-group w-100 ms-1">
                            <label for="noticePeriod">Notice Period</label>
                            <input type="text" className="form-control" id="noticePeriod" onChange={(e) => setNoticePeriod(e.target.value)} onBlur={(e) => onBlurHandler(e.target.value, "Notice Period")} />
                        </div>
                    </div>
                    <div className="form-row d-flex">
                        <div className="form-group w-100 me-1">
                            <label for="salary">Salary</label>
                            <input type="text" className="form-control" id="salary" onChange={(e) => setSalary(e.target.value)} onBlur={(e) => onBlurHandler(e.target.value, "Salary")} />
                        </div>
                        <div className="form-group w-100 ms-1">
                            <label for="timing">Timing</label>
                            <input type="text" className="form-control" id="timing" onChange={(e) => setTiming(e.target.value)} onBlur={(e) => onBlurHandler(e.target.value, "Timing")} />
                        </div>
                    </div>
                    <button type="btn" className="btn btn-primary" onClick={onSubmitHandler}>Submit</button>
                </form>
            </div>
            {/* <button className="btn btn-primary" onClick={nextStep}>
                Next
            </button> */}
        </div>
    );
};
const DocumentUploadForm = ({ nextStep, prevStep }) => {
    return (
        <div>
            <h4 className='text-center'>Step 2: Upload Document</h4>
            {/* Form fields for the document upload step */}
            <hr />
            <h6>Employee CNIC</h6>
            <div className='form-row d-flex'>
                <div className="form-group w-100 me-1">
                    <label for="profileImage">CNIC Front</label>
                    <input type="file" className="form-control" id="CNICFrontImage" />
                </div>
                <div className="form-group w-100 ms-1">
                    <label for="profileImage">CNIC Back</label>
                    <input type="file" className="form-control" id="CNICBackImage" />
                </div>
            </div>
            <hr />
            <h6 className='mt-2'>Job Document</h6>
            <div className='form-row d-flex'>
                <div className="form-group w-100 me-1">
                    <label for="profileImage">CV</label>
                    <input type="file" className="form-control" id="CNICFrontImage" />
                </div>
                <div className="form-group w-100 ms-1">
                    <label for="profileImage">Offer Letter</label>
                    <input type="file" className="form-control" id="CNICBackImage" />
                </div>
            </div>
            <hr />
            <h6 className='mt-2'>Guardian CNIC</h6>
            <div className='form-row d-flex'>
                <div className="form-group w-100 me-1">
                    <label for="profileImage">Front</label>
                    <input type="file" className="form-control" id="CNICFrontImage" />
                </div>
                <div className="form-group w-100 ms-1">
                    <label for="profileImage">Back</label>
                    <input type="file" className="form-control" id="CNICBackImage" />
                </div>
            </div>
            <div className='d-flex justify-content-between mt-3'>
                {/* <button className="btn btn-secondary" onClick={prevStep}>
                    Previous
                </button>
                <button className="btn btn-primary" onClick={nextStep}>
                    Next
                </button> */}
            </div>
        </div>
    );
};

const OverviewForm = ({ nextStep }) => {
    return (
        <div>
            <h3>Step 3: Overview</h3>
            {/* Form fields for the information step */}
            {/* <button className="btn btn-primary" onClick={nextStep}>
                Submit
            </button> */}
        </div>
    );
};


const Stepper = (props) => {
    // State to keep track of the current step

    return (
        <div>
            {/* <h2>Multi-Step Form</h2> */}
            {props.current === 1 && <InformationForm nextStep={props.next} />}
            {props.current === 2 && (
                <DocumentUploadForm nextStep={props.next} prevStep={props.prev} />
            )}
            {props.current === 3 && <OverviewForm prevStep={props.prev} />}
        </div>
    );
};

export default Stepper;
