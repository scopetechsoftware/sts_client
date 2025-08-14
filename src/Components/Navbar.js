// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
       
        <Link to={'/'} className="nav-logo">STS</Link>

        {/* Hamburger menu button */}
        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Menu links */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
           
             <Link to={'/'} className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
           
              <Link to={'/about'} className="nav-link">About</Link>
          </li>
          <li className="nav-item">
             <Link to={'/course'} className="nav-link">Course</Link>

          </li>
          <li className="nav-item">
                         <Link to={'/gallery'} className="nav-link">Events</Link>

          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
