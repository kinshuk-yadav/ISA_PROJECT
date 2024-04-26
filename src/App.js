import "./App.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Routes } from "react-router-dom";

import Home from "../src/pages/Home";
import Profile from "./pages/Profile";
import Resources from "./pages/Resources";
import POTD from "./pages/POTD";
import Login from "./pages/Login";
import { UserAuthContextProvider } from "./context/userAuthContext";

var val = 1;

function App() {
  return (
    <UserAuthContextProvider>
    <div className="container-fluidd">
      
      
      {/* <button type="button" class="btn btn-primary">Primary</button>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <nav className= {` ${val == 1 ? 'navbar navbar-expand-lg navbar-light bg-light' : ''}`}> 
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
            <a className={`nav-item nav-link ${val == 1 ? 'active' : ''}`} href="#">
              Home <span className="sr-only">(current)</span>
            </a>
            <a class="nav-item nav-link" href="#">Features</a>
            <a class="nav-item nav-link" href="#">Pricing</a>
            <a class="nav-item nav-link disabled" href="#">Disabled</a>
          </div>
        </div>
      </nav> */}


      {/* Defining routes path and rendering components as element */}
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/potd" element={<POTD />} /> 
      </Routes>
    </div>
    </UserAuthContextProvider>
  );
}

export default App;