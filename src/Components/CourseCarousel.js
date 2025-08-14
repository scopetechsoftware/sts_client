import React, { useRef, useEffect, useState } from "react";

const courses = [
  {
    id: 1,
    title: "Python Training",
    description: "Learn Python from basics to advanced concepts with hands-on projects.",
    image:
      "https://images.unsplash.com/photo-1581093588401-8b7b6b1abf34?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 2,
    title: "Java & C++",
    description:
      "Master Java and C++ programming for software development and problem solving.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 3,
    title: "AI & Cybersecurity",
    description:
      "Get ahead in AI technologies and cybersecurity to protect and innovate.",
    image:
      "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 4,
    title: "Full Stack MERN",
    description:
      "Become a full stack developer using MongoDB, Express, React, and Node.js.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 5,
    title: "Tally & Spoken English",
    description: "Accounting with Tally and improve communication skills fluently.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 6,
    title: "Resin Arts & Drawing",
    description:
      "Explore creative resin art techniques and enhance your drawing skills.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=60",
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
          color: #4f46e5;
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
          box-shadow: 0 5px 15px rgba(79,70,229,0.2);
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
          background: rgba(79,70,229,0.8);
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
          background: rgba(79,70,229,1);
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