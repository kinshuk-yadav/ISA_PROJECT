import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Home.css';
import Navbar from '../components/Navbar';
import { GiBrain } from "react-icons/gi";
import { MdFreeBreakfast } from "react-icons/md";
import backgroundImage from '../assets/bg-jeehack.png';

export default function Home() {
  return (
    <div className='home'>
      <Navbar />
      <div className="flex-container">
        <div className="card">
          <Link to="/POTD" className='CardWrap'>                     
            <h5 className="card-title">PROBLEM OF TODAY <br /> SOLVE NOW !</h5>
            <GiBrain style={{ fontSize: '150px' }}/><br />  
          </Link>
        </div>

        <div className="card">
          <a href="https://boring-breaks.netlify.app/" target="_blank" className='CardWrap'>                     
            <h5 className="card-title">FEELING BORED? <br /> TAKE A BREAK</h5>
            {/* <GiBrain style={{ fontSize: '150px' }}/><br />   */}
            <MdFreeBreakfast style={{ fontSize: '150px'}}/><br />
          </a>
        </div>

        <div className="card coming-soon">
          <div className="card-hover-overlay">Coming Soon</div>
          <h5 className="card-title">RESOURCES</h5>
          <p className="card-text">Resourses to guide, at every step of the way.<br /> Practice questions in Real, JEE like environment</p>
          {/* <Link to="/resources" className="btn btn-primary">Go somewhere</Link> */}
        </div>

        <div className="card coming-soon">
          <div className="card-hover-overlay">Coming Soon</div>
          <h5 className="card-title">PROFILE</h5>
          <p className="card-text">Find the details of where you stand in terms of syllabus covered<br />Prepare your best</p>
          {/* <Link to="/profile" className="btn btn-primary">Go somewhere</Link> */}
        </div>
      </div>
    </div>
  );
}
