// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">STS</Link>

        {/* Hamburger for mobile */}
        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
          <li className="nav-item"><Link to="/course" className="nav-link">Course</Link></li>
          <li className="nav-item"><Link to="/gallery" className="nav-link">Events</Link></li>

          <li className="nav-item dropdown">
            <span className="nav-link">Projects ▾</span>
            <div className="dropdown-content">
              <Link to="/projects/Python">Python Projects</Link>
              <Link to="/projects/Java">Java Projects</Link>
              <Link to="/projects/DotNet">Dot Net Projects</Link>
              <Link to="/projects/PHP">Php Projects</Link>
              <Link to="/projects/Mern">Mern Projects</Link>
              <Link to="/projects/Mini">Mini Projects</Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
