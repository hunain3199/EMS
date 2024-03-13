import React, { useState } from 'react';
import { useAuth } from '../Components/AuthContext';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../data/operations';
import Spinner from '../Components/Spinner';
import { date_string } from '../Components/AttendanceModal';
import { datte } from '../db/user';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [spin, setSpin] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const token = await signIn(email, password);
            console.log(token.data.token.user.uid);
            localStorage.setItem("userId",token.data.token.user.uid)
            console.log(token.data.token.user.accessToken);
            if (login(token.data.token.user.accessToken)) {
                navigate('/');
                
            }
            // setSpin(true);
        } catch (e) {
            console.log(e);
            // setSpin(false);
        } finally {
            // setSpin(false);
        }

    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4 mt-5">
                    <h2 className="text-center">Sign In</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-secondary btn-block" onClick={handleSignIn}>Sign In</button>
                        <Spinner state={true} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;