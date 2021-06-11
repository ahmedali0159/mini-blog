import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container">
    <Link exact to ="/" className="navbar-brand" style={{color: 'white'}}>MINI BLOG</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link exact to ="/" className="nav-link" style={{color: 'white'}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link exact to  = "/profile" className="nav-link" style={{color: 'white'}}>Profile</Link>
        </li>
        <li className="nav-item">
          <Link exact to = "/user" className="nav-link" style={{color: 'white'}}>User</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
};

export default Navbar;
