import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import deal from '../Assets/first bage.png';
import placement from "../Assets/placement.png";
import comp from "../Assets/comp.png"




const AutoCarousel = () => {
  const slides = [
    {
      image: deal,
      heading: "IT Training",
      content: "Comprehensive training programs in cutting-edge technologies including Full Stack Development, React JS, VLSI Design, and Tally ERP. Transform your career with industry-relevant skills and hands-on experience.",
      subheading: "Professional Skill Development",
      stats: "500+ Students Trained",
      color: "#27cdcbff"
    },
    {
      image: placement,
      heading: "Placement",
      content: "End-to-end placement assistance with personalized resume building, comprehensive interview preparation, and direct connections with top-tier companies to secure your dream career opportunity.",
      subheading: "Career Opportunities",
      stats: "95% Placement Rate",
      color: "#10b981"
    },
    {
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
      heading: "Consultancy",
      content: "Expert IT consultancy services for businesses including strategic technology planning, digital transformation initiatives, and custom software solutions to drive growth and innovation.",
      subheading: "Business Solutions",
      stats: "200+ Projects Delivered",
      color: "#f59e0b"
    },
    {
      image: comp,
      heading: "Project",
      content: "Custom project development services from initial concept to final deployment including responsive web applications, mobile apps, and enterprise-grade software solutions.",
      subheading: "Custom Development",
      stats: "100+ Happy Clients",
      color: "#202ae2ff"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const length = slides.length;

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
        setProgress(0);
      }, 6000);
      
      const progressInterval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + (100 / 600)));
      }, 10);
      
      return () => {
        clearInterval(interval);
        clearInterval(progressInterval);
      };
    }
  }, [length, isPlaying]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    setProgress(0);
  };

  const goToSlide = (index) => {
    setCurrent(index);
    setProgress(0);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="hero-container">
      {/* Animated Background */}
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide-background ${index === current ? "active" : ""}`}
        >
          <img
            src={slide.image}
            alt={slide.heading}
            className="slide-image"
          />
          <div className="slide-overlay" style={{ background: `linear-gradient(135deg, ${slide.color}15, rgba(0,0,0,0.7))` }} />
        </div>
      ))}

      {/* Main Content */}
      <div className="hero-content">
        <div className="content-container">
          {/* Main Title */}
          {/* <div className="main-title-section">
            <h1 className="main-title">
              <span className="title-word">IT</span>
              <span className="title-word">Training,</span>
              <span className="title-word">Placement,</span>
              <span className="title-word">Consultancy</span>
              <span className="title-word">&</span>
              <span className="title-word">Project</span>
            </h1>
            <div className="title-underline"></div>
          </div> */}

          {/* Dynamic Content */}
          <div className="slide-content-wrapper">
            <div key={current} className="slide-content">
              <div className="content-badge" style={{ backgroundColor: slides[current].color }}>
                {slides[current].subheading}
              </div>
              
              <h2 className="slide-title" style={{ color: slides[current].color }}>
                {slides[current].heading}
              </h2>
              
              <p className="slide-description">
                {slides[current].content}
              </p>
              
              {/* <div className="stats-badge">
                <span className="stats-icon">📊</span>
                {slides[current].stats}
              </div> */}
              
              <div className="cta-section">
                <button className="btn-primary" style={{ backgroundColor: slides[current].color }}>
                  <span>Get Started</span>
                  <div className="btn-ripple"></div>
                </button>
                <button className="btn-secondary">
                  <span>Learn More</span>
                  <div className="btn-ripple"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Navigation */}
      <div className="navigation-controls">
        {/* Arrow Navigation */}
        <button onClick={prevSlide} className="nav-arrow nav-left">
          <ChevronLeft className="arrow-icon" />
          <div className="nav-ripple"></div>
        </button>
        
        <button onClick={nextSlide} className="nav-arrow nav-right">
          <ChevronRight className="arrow-icon" />
          <div className="nav-ripple"></div>
        </button>

        {/* Play/Pause Control */}
        <button onClick={togglePlayPause} className="play-pause-btn">
          {isPlaying ? <Pause className="control-icon" /> : <Play className="control-icon" />}
          <div className="control-ripple"></div>
        </button>
      </div>

      {/* Advanced Indicators */}
      <div className="slide-indicators">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`indicator ${index === current ? "active" : ""}`}
            style={{ '--indicator-color': slide.color }}
          >
            <div className="indicator-progress" style={{ 
              width: index === current ? `${progress}%` : '0%',
              backgroundColor: slide.color 
            }}></div>
            <span className="indicator-label">{slide.heading}</span>
          </button>
        ))}
      </div>

      {/* Progress Ring */}
      <div className="progress-ring">
        <svg className="progress-svg" viewBox="0 0 100 100">
          <circle
            className="progress-bg"
            cx="50"
            cy="50"
            r="45"
          />
          <circle
            className="progress-fill"
            cx="50"
            cy="50"
            r="45"
            style={{
              strokeDashoffset: `${283 - (283 * progress) / 100}`,
              stroke: slides[current].color
            }}
          />
        </svg>
        <div className="progress-text">{Math.round(progress)}%</div>
      </div>
    </div>
  );
};

export default AutoCarousel;