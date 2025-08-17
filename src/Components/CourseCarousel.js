import React, { useRef, useEffect, useState } from "react";
import photoshop from '../Assets/photoshop.jpg';
import resinart from '../Assets/resinart.jpg';
import digi from '../Assets/digitalMarget.png';
import taGst from '../Assets/tallyGst.png';
import fullstack from '../Assets/fullstack.png';
import ai from '../Assets/AI.png';
import pythonDjango from '../Assets/pythonDjango.png';
import mern from '../Assets/fullstackmern.webp';
import jspirng from '../Assets/javaspring.png';
import phplara from '../Assets/phpLaraval.png';
import webdesign from '../Assets/webdesing.png';
import java from '../Assets/java.png';
import php from '../Assets/php.png';
import python from '../Assets/pythonPRogramming.png';
import cc from '../Assets/c-c++.png';
import ms from '../Assets/newwhat.png';
import tally from '../Assets/tallyim.png';
import sp from '../Assets/spoken english.png';



const courses = [
  // Business
  {
    id: 1,
    type: "business",
    title: "Photoshop",
    description: "Learn professional photo editing, retouching, and graphic design with Adobe Photoshop.",
    image: photoshop,
  },
  {
    id: 2,
    type: "business",
    title: "Resin Arts",
    description: "Discover resin techniques to create stunning art pieces, jewelry, and décor products.",
    image: resinart,
  },
  {
    id: 3,
    type: "business",
    title: "Digital Marketing",
    description: "Master SEO, social media, and online ads to grow businesses in the digital era.",
    image: digi,
  },

  // Professional
  {
    id: 4,
    type: "professional",
    title: "Tally with GST",
    description: "Gain expertise in accounting, GST filing, and financial management using Tally ERP.",
    image: taGst,
  },
  {
    id: 5,
    type: "professional",
    title: "Full Stack Development",
    description: "Learn front-end, back-end, and databases to build complete web applications from scratch.",
    image: fullstack,
  },
  {
    id: 6,
    type: "professional",
    title: "AI",
    description: "Understand artificial intelligence, machine learning, and real-world AI applications.",
    image: ai,
  },
  {
    id: 7,
    type: "professional",
    title: "MERN",
    description: "Master MongoDB, Express, React, and Node.js to create modern, scalable applications.",
    image: mern,
  },
  {
    id: 8,
    type: "professional",
    title: "Python Django",
    description: "Develop secure and scalable web apps using Python and Django framework.",
    image: pythonDjango,
  },
  {
    id: 9,
    type: "professional",
    title: "Java Spring",
    description: "Build enterprise-level applications with Java Spring Boot and REST APIs.",
    image: jspirng,
  },
  {
    id: 10,
    type: "professional",
    title: "PHP Laravel",
    description: "Learn Laravel framework to create dynamic and secure PHP web applications.",
    image: phplara,
  },

  // Basics
  {
    id: 11,
    type: "basics",
    title: "Web Design",
    description: "Create responsive websites with HTML, CSS, and JavaScript basics.",
    image: webdesign,
  },
  {
    id: 12,
    type: "basics",
    title: "Java",
    description: "Master Java programming for software development and problem solving.",
    image: java,
  },
  {
    id: 13,
    type: "basics",
    title: "PHP",
    description: "Learn PHP to create dynamic websites and connect with databases.",
    image: php,
  },
  {
    id: 14,
    type: "basics",
    title: "Python",
    description: "Build a strong foundation in Python for programming, automation, and AI.",
    image: python,
  },
  {
    id: 15,
    type: "basics",
    title: "C / C++",
    description: "Master C and C++ for efficient coding, system programming, and logic building.",
    image: cc,
  },
  {
    id: 16,
    type: "basics",
    title: "MS Office",
    description: "Gain hands-on skills in Word, Excel, and PowerPoint for office productivity.",
    image: ms,
  },
  {
    id: 17,
    type: "basics",
    title: "Tally",
    description: "Learn accounting fundamentals and financial management with Tally software.",
    image: tally,
  },
  {
    id: 18,
    type: "basics",
    title: "Spoken English",
    description: "Improve fluency, grammar, and communication skills for professional growth.",
    image: sp,
  },
];


export default function CourseCarousel() {
  const carouselRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const timeoutRef = useRef(null);

  // On mount, get card width dynamically
  useEffect(() => {
    const firstCard = carouselRef.current?.querySelector(".card");
    if (firstCard) {
      setCardWidth(firstCard.offsetWidth + 16); // 16px gap
    }
  }, []);

  // Drag handlers
  const dragStart = (e) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX || e.touches[0].pageX);
    setScrollLeft(carouselRef.current.scrollLeft);
    clearTimeout(timeoutRef.current);
  };

  const dragging = (e) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.pageX || e.touches[0].pageX;
    const walk = startX - x;
    carouselRef.current.scrollLeft = scrollLeft + walk;
  };

  const dragStop = () => {
    setIsDragging(false);
    resetAutoPlay();
  };

  // Infinite scroll effect by cloning cards at start and end
  useEffect(() => {
    if (!carouselRef.current || cardWidth === 0) return;

    const carousel = carouselRef.current;
    const children = [...carousel.children];
    const cardsPerView = 4;

    // Prevent duplicate clones
    if (carousel.querySelectorAll(".clone").length > 0) return;

    // Clone last cardsPerView to front
    children.slice(-cardsPerView).forEach((card) => {
      const clone = card.cloneNode(true);
      clone.classList.add("clone");
      carousel.insertBefore(clone, carousel.firstChild);
    });
    // Clone first cardsPerView to end
    children.slice(0, cardsPerView).forEach((card) => {
      const clone = card.cloneNode(true);
      clone.classList.add("clone");
      carousel.appendChild(clone);
    });

    // Scroll to the real first card (offset by cloned cards)
    carousel.scrollLeft = cardsPerView * cardWidth;
  }, [cardWidth]);

  // Handle scroll to loop infinitely
  const handleScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    const cardsPerView = 4;

    if (carousel.scrollLeft <= 0) {
      // Jump to the original cards at the end
      carousel.classList.add("no-transition");
      carousel.scrollLeft = maxScrollLeft - cardsPerView * cardWidth;
      setTimeout(() => {
        carousel.classList.remove("no-transition");
      }, 20);
    } else if (carousel.scrollLeft >= maxScrollLeft - 1) {
      // Jump to the original cards at the start
      carousel.classList.add("no-transition");
      carousel.scrollLeft = cardsPerView * cardWidth;
      setTimeout(() => {
        carousel.classList.remove("no-transition");
      }, 20);
    }
  };

  // Arrow click handlers
  const scrollLeftFunc = () => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    resetAutoPlay();
  };
  const scrollRightFunc = () => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    resetAutoPlay();
  };

  // Auto play
  const autoPlay = () => {
    if (window.innerWidth < 600 || !carouselRef.current) return;
    timeoutRef.current = setTimeout(() => {
      scrollRightFunc();
    }, 3000);
  };

  const resetAutoPlay = () => {
    clearTimeout(timeoutRef.current);
    autoPlay();
  };

  useEffect(() => {
    autoPlay();
    return () => clearTimeout(timeoutRef.current);
  }, [cardWidth]);

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }
        .carousel-wrapper {
          max-width: 1100px;
          margin: 2rem auto;
          position: relative;
          user-select: none;
        }
        .carousel {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: calc((100% - 48px) / 4);
          gap: 16px;
          overflow-x: auto;
          scroll-behavior: smooth;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          padding-bottom: 12px;
        }
        .carousel.no-transition {
          scroll-behavior: auto !important;
        }
        .carousel::-webkit-scrollbar {
          display: none;
        }
        .card {
          background: white;
          border-radius: 15px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          scroll-snap-align: start;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          cursor: grab;
          transition: box-shadow 0.3s ease;
          height: 380px;
        }
        .card:active {
          cursor: grabbing;
        }
        .card:hover {
          box-shadow: 0 14px 28px rgba(79,70,229,0.25);
          transform: translateY(-6px);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-content {
          flex-grow: 1;
        }
        .card-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #1F2661;
          margin-bottom: 0.75rem;
        }
        .card-desc {
          font-size: 1rem;
          color: #555;
          line-height: 1.4;
          user-select: text;
        }
        .card-image {
          margin-top: 1rem;
          border-radius: 12px;
          overflow: hidden;
          flex-shrink: 0;
          height: 160px;
          box-shadow: 0 5px 15px  rgba(31, 38, 97, 0.2);
          transition: transform 0.3s ease;
        }
        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .card:hover .card-image {
          transform: scale(1.05);
        }
        /* Arrows */
        .arrow-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background:  rgba(31, 38, 97, 0.8);
          border: none;
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: background 0.3s ease;
          z-index: 10;
          user-select: none;
        }
        .arrow-btn:hover {
          background: #1F2661;
        }
        .arrow-left {
          left: -20px;
        }
        .arrow-right {
          right: -20px;
        }
        /* Responsive */
        @media (max-width: 1024px) {
          .carousel {
            grid-auto-columns: calc((100% - 32px) / 3);
          }
        }
        @media (max-width: 768px) {
          .carousel {
            grid-auto-columns: calc((100% - 16px) / 2);
          }
        }
        @media (max-width: 480px) {
          .carousel {
            grid-auto-columns: 100%;
          }
          .arrow-btn {
            display: none;
          }
        }
      `}</style>

      <div
        className="carousel-wrapper"
        onMouseEnter={() => clearTimeout(timeoutRef.current)}
        onMouseLeave={() => autoPlay()}
      >
        <button
          className="arrow-btn arrow-left"
          aria-label="Scroll Left"
          onClick={scrollLeftFunc}
        >
          &#8249;
        </button>

        <div
          className="carousel"
          ref={carouselRef}
          onScroll={handleScroll}
          onMouseDown={dragStart}
          onTouchStart={dragStart}
          onMouseMove={dragging}
          onTouchMove={dragging}
          onMouseUp={dragStop}
          onMouseLeave={dragStop}
          onTouchEnd={dragStop}
        >
          {courses.map(({ id, title, description, image }) => (
            <div key={id} className="card">
              <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-desc">{description}</p>
              </div>
              <div className="card-image">
                <img src={image} alt={title} loading="lazy" />
              </div>
            </div>
          ))}
        </div>

        <button
          className="arrow-btn arrow-right"
          aria-label="Scroll Right"
          onClick={scrollRightFunc}
        >
          &#8250;
        </button>
      </div>
    </>
  );
}