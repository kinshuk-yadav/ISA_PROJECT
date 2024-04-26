import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Home.css'
import Navbar from '../components/Navbar';

export default function Home() {
    
  return (
    <div className='home'>
      <Navbar />
      <div className="flex-container">
        <div className="card" style={{ width: '18rem', backgroundColor: 'lightblue' }}>
          <div className="card-body">
            <h5 className="card-title"> Problem of Today</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            
            {/* <button onClick={() => { (navigate('/Resources')) }} >
              Read
            </button> */}
            <Link to="/profile" className="btn btn-primary">Go somewhere</Link>
            {/* <Link to="/profile" class="list">
            Profile
          </Link> */}
          </div>
        </div>
        <div className="card" style={{ width: '18rem', backgroundColor: 'lightblue' }}>
          <div className="card-body">
            <h5 className="card-title">Feeling Bored?
            <br />
              Take a Break...
            </h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <Link to="/" className="btn btn-primary">Go somewhere</Link>
          </div>
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