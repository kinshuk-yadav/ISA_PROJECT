import React from 'react'
import './Login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";


const Login = () => {
  return (
    <div className="top-wrapp">
        <div className='wrapper'>
            {/* <div className="temp">This is sample text</div>
            Login Hi */}
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <FaLock className='icon' />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember Me</label>
                    <a href="#">Forgot Password</a>
                </div>

                <button type='submit'>Login</button>
                <div className="register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login