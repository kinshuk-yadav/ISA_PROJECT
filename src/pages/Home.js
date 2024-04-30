import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Home.css'
import Navbar from '../components/Navbar';

import { GiBrain } from "react-icons/gi";

export default function Home() {
    
  return (
    <div className='home'>
      <Navbar />
      <div className="flex-container">
        <div className="card" >
          <Link to="/profile" className='CardWrap'>                     
                <h5 className="card-title" color='BLACK'>PROBLEM OF TODAY <br /> SOLVE NOW !</h5>
                <GiBrain style={{ fontSize: '150px' }}/><br />  
          </Link>
        </div>

        <div className="card" >
          {/* <Link to="/profile" className='CardWrap'>                     
                <h5 className="card-title">FEELING BORED? <br /> TAKE A BREAK</h5>
                <GiBrain style={{ fontSize: '150px' }}/><br />  
          </Link> */}
          <a href = "https://boring-breaks.netlify.app/" target = "_blank" className='CardWrap'>                     
                <h5 className="card-title">FEELING BORED? <br /> TAKE A BREAK</h5>
                <GiBrain style={{ fontSize: '150px' }}/><br />  
          </a>
        </div>



      </div>
      <div className="flex-container">
        <div className="card" style={{ width: '18rem', backgroundColor: 'lightblue' }}>
          <div className="card-body">
            <h5 className="card-title">Resources</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <Link to="/resources"className="btn btn-primary">Go somewhere</Link>
          </div>
        </div>
        <div className="card" style={{ width: '18rem', backgroundColor: 'lightblue' }}>
          <div className="card-body">
            <h5 className="card-title">Profile</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <Link to="/profile" className="btn btn-primary">Go somewhere</Link>
          </div>
        </div>
      </div>
    </div>
  );
}