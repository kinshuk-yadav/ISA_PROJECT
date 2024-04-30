import React, { useState } from 'react'
import './Login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";

import { useUserAuth } from '../context/userAuthContext';
import { Navigate, useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("+91");
	const {signIn, signUp} = useUserAuth();

	const login = async () => {
		const response = await signIn({email, password});
		if(response) {
			console.log("logged In sucessfully!!");
            navigate("/home");
    
		} else {
			console.log("Error in login!!");
		}
	}

	const register = async () => {
		const response = await signUp({email, password, name: userName, phoneNumber});
		if(response) {
			console.log("Registered In sucessfully!!");
		} else {
			console.log("Error in registeration!!");
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		if(isLogin) {
			await login();
		} else {
			await register();
		}
	}

  return (
    <div className="top-wrapp">
        <div className='wrapper'>
            {/* <div className="temp">This is sample text</div>
            Login Hi */}
            <form action="" onSubmit={(e) => handleSubmit(e)} >
                {isLogin ? <h1>Login</h1> : <h1>Sign Up</h1>}
                {/* <h4>Enter the Following details</h4> */}
                {!isLogin && <div className="input-box">
                    <input type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)} required />
                    <FaUser className='icon' />
                </div>}
                <div className="input-box">
                    <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                    {/* <MdOutlineEmail className='icon'/> */}
                    <HiOutlineMail className='icon'/>
                </div>
                {!isLogin && <div className="input-box">
                    <input type="text" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} required />        
                    <FaPhone className='icon'/>
                </div>}
                <div className="input-box">
                    <input type="password" placeholder="Password" onChange = {(e) => setPassword(e.target.value)} required />
                    <FaUser className='icon' />
                </div>

                {isLogin && <div className="remember-forgot">
                    <label><input type="checkbox" />Remember Me</label>
                    <a href="#">Forgot Password</a>
                </div>}

                <button type='submit'>Login</button>
                
                <div className="register-link">
                    {!isLogin ? <p>Already have an account? <a href="#" onClick={() => setIsLogin(!isLogin)}>Login</a></p>
                    : <p>Don't have an account? <a href="#" onClick={() => setIsLogin(!isLogin)}>Register</a></p>
                    }
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login