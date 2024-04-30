import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    // <nav className="navHead">
    //     <ul className="navList">
    //       <Link to="/home" class="list">
    //         Home
    //       </Link>
    //        {/* <Link to="/resources" class="list">
    //         Resources
    //       </Link>
    //       <Link to="/profile" class="list">
    //         Profile
    //       </Link> */}
    //       <Link to="/potd" class="list">
    //         Problem of the Day
    //       </Link> 
    //     </ul>
    //   </nav>

<nav class="navbar navbar-expand-lg navbar-light bg-secondary">
    <div class="container">
        <div class="navbar-brand mx-auto text-light">JEEHack</div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon text-light"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <Link to="/home" class="nav-item nav-link active text-light" >Home </Link>
                <Link to="/potd" class="nav-item nav-link active text-light" >Problem Of The Day </Link>
                <Link to="/potd" class="nav-item nav-link disabled text-dark " >Resources </Link>
                <Link to="/potd" class="nav-item nav-link disabled text-dark" >Profile </Link>
            </div>
        </div>
    </div>
</nav>

  )
}


