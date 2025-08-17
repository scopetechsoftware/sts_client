import React, { useState, useEffect } from "react";
import embed from "../Assets/embed.jpg";
import basic from "../Assets/basic.jpg";
import tally from "../Assets/tally.jpg";
import resin from "../Assets/resin.jpg";


const AutoCarousel = () => {
  const slides = [
    {
      image: basic,
      heading: "Full Stack Development",
      content: "Learn Resin Art, Full Stack, and Tally"
    },
    {
      image: resin,
      heading: "React JS Mastery",
      content: "Master React and create modern web apps"
    },
    {
      image: embed,
      heading: "VLSI Design",
      content: "Hands-on experience with semiconductor design"
    },
    {
      image: tally,
      heading: "Tally ERP & Accounting",
      content: "Proficient accounting skills with Tally ERP"
    }
  ];

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, [length]);

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div
          className={`slide ${index === current ? "active" : ""}`}
          key={index}
        >
          {index === current && (
            <>
              <img src={slide.image} alt={slide.heading} className="slide-image" style={{objectFit:' cover'}}/>
              <div className="overlay">
                <h2>{slide.heading}</h2>
                {slide.content && <p>{slide.content}</p>}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default AutoCarousel;
