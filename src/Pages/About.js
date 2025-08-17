import React from "react";
import { FaUniversity, FaUsers, FaLaptopCode, FaHandshake, FaChalkboardTeacher, FaProjectDiagram } from "react-icons/fa";


const About = () => {
  return (
    <div className="about-container">
      {/* Banner */}
      <div className="about-banner">
        <div className="about-banner-overlay">
          <h1 className="about-banner-text">About STS</h1>
        </div>
      </div>

      {/* About Section */}
      <section className="about-content">
        <h2 className="about-heading">
          <FaUniversity className="about-icon" /> Welcome to STS Madurai
        </h2>
        <p className="about-description">
          <strong>STS</strong> located in Madurai, is a leading 
          training and skill development institute dedicated to bridging the gap between 
          education and industry needs. Since our inception, we have empowered hundreds of 
          students and professionals with hands-on learning, real-world projects, and 
          placement support that drives career success.
          <br /><br />
          Our programs are designed to cater to students from all educational backgrounds. 
          Whether you are a fresher stepping into the world of technology or a professional 
          looking to upgrade your skills, STS provides the perfect platform to learn, grow, 
          and excel.
        </p>

        {/* Mission & Vision */}
        <div className="about-mission-vision">
          <div className="mv-card">
            <h3><FaChalkboardTeacher /> Our Mission</h3>
            <p>
              To deliver high-quality, industry-relevant training that enhances skills, 
              builds confidence, and enables our students to secure rewarding careers.
            </p>
          </div>
          <div className="mv-card">
            <h3><FaProjectDiagram /> Our Vision</h3>
            <p>
              To be a trusted leader in skill development, recognized for excellence, 
              innovation, and the ability to transform lives through education.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="about-highlights">
          <div className="highlight-card">
            <FaLaptopCode className="highlight-icon" />
            <h3>Industry-Relevant Courses</h3>
            <p>Stay ahead with programs in Full Stack Development, ReactJS, VLSI Design, Tally, Embedded Systems, and more.</p>
          </div>

          <div className="highlight-card">
            <FaUsers className="highlight-icon" />
            <h3>Expert Trainers</h3>
            <p>Learn from professionals with years of practical and teaching experience.</p>
          </div>

          <div className="highlight-card">
            <FaHandshake className="highlight-icon" />
            <h3>Placement Assistance</h3>
            <p>Dedicated placement team connecting you to top companies and job opportunities.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
