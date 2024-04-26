import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navHead">
        <ul className="navList">
          <Link to="/" class="list">
            Home
          </Link>
           <Link to="/resources" class="list">
            Resources
          </Link>
          <Link to="/profile" class="list">
            Profile
          </Link>
          <Link to="/potd" class="list">
            Problem of the Day
          </Link> 
        </ul>
      </nav>

        // <nav class="navbar navbar-expand-lg navbar-light bg-light">
        // <a class="navbar-brand" href="#">Navbar</a>
        // <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        // <span class="navbar-toggler-icon"></span>
        // </button>
        // <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        // <div class="navbar-nav">
        //     <Link to="/potd" class="nav-item nav-link active" >Home </Link>
        //     <a class="nav-item nav-link" href="#">Features</a>
        //     <a class="nav-item nav-link" href="#">Pricing</a>
        //     <a class="nav-item nav-link disabled" href="#">Disabled</a>
        // </div>
        // </div>
        // </nav>
  )
}


