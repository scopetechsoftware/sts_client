// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { url } from "../Api";
import logo from "../Assets/logo sts.jpg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav   className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
        <img src={logo} width={80} height={40}/></Link>

        {/* Hamburger for mobile */}
        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
          <li className="nav-item"><Link to="/course" className="nav-link">Training</Link></li>
          <li className="nav-item"><Link to="/placement" className="nav-link">Placement</Link></li>
          <li className="nav-item"><Link to="/consultancy" className="nav-link">Consultancy</Link></li>
          <li className="nav-item"><Link to="/career" className="nav-link">Career</Link></li>
         

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
           <li className="nav-item"><Link to="/gallery" className="nav-link">Events</Link></li>
            <li className="nav-item "><Link to={url} className="nav-link nav-btn">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
