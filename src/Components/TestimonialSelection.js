import React, { useState } from "react";
import pratheep from '../Assets/review 1.png';
import narmatha from '../Assets/narmatha narayanan.png';
import krithick from '../Assets/krithick.png';

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Pratheep",
      role: "",
      photo: pratheep,
      text: `I completed a C and C++ programming course at Scope Tech Software Solution, Madurai.
The course was well-structured and suitable for both beginners and those with basic programming knowledge.
The trainers explained core concepts like loops, arrays, functions, pointers, OOPs (in C++) clearly with real-time examples.
We also worked on mini-projects and coding tasks, which helped me gain practical experience.
The learning environment was supportive and interactive.
Overall, it was a great experience and I would recommend this course to anyone looking to build a strong foundation in programming.`,
      rating: 5,
    },
    {
      name: "Narmatha Narayanan",
      role: "",
      photo: narmatha,
      text: `My internship at [scope tech software solutions] was a great learning experience. The team was supportive, and I got hands-on exposure to real-time projects. I improved my technical and communication skills. The work culture was professional and friendly. Overall, it was a valuable step towards my career development.`,
      rating: 4,
    },
    {
      name: "KRITHICK SELVAN",
      role: "",
      photo: krithick,
      text: `I’m extremely satisfied with the learning experience. The instructors were knowledgeable, patient, and explained every concept clearly—from the basics to more advanced techniques. The course structure was well-organized, with plenty of hands-on practice that helped me gain confidence in using the photoshop software effectively.`,
      rating: 5,
    },
  ];

  // Track expanded/collapsed state per testimonial
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <style>{`
        .testimonial-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 50px 20px;
          font-family: 'Segoe UI', sans-serif;
        }
        .testimonial-heading {
          text-align: center;
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 40px;
          color: #1F2661;
        }
        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }
        .testimonial-card {
          background: white;
          border-radius: 15px;
          padding: 25px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.12);
        }
        .testimonial-photo {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 15px;
          border: 3px solid #1F2661;
        }
        .testimonial-name {
          font-size: 1.2rem;
          font-weight: bold;
          color: #111827;
          margin-bottom: 5px;
        }
        .testimonial-role {
          font-size: 0.95rem;
          color: #4b5563;
          margin-bottom: 15px;
        }
        .testimonial-text {
          font-size: 0.95rem;
          color: #374151;
          margin-bottom: 10px;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .expanded {
          -webkit-line-clamp: unset !important;
          overflow: visible !important;
        }
        .show-more-btn {
          background: none;
          border: none;
          color: #1F2661;
          cursor: pointer;
          font-size: 0.9rem;
          padding: 0;
        }
           .show-more-btn:hover {
            color: blue;
           text-decoration: 1px solid underline;
           }
        .stars {
          color: #fbbf24;
          font-size: 1rem;
        }
      `}</style>

      <section className="testimonial-section">
        <h2 className="main-headline">What Our Students Say</h2>
        <div className="testimonial-grid">
          {testimonials.map((t, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div key={index} className="testimonial-card">
                <img src={t.photo} alt={t.name} className="testimonial-photo" />
                <h3 className="testimonial-name">{t.name}</h3>
                <p className="testimonial-role">{t.role}</p>
                <p
                  className={`testimonial-text ${isExpanded ? "expanded" : ""}`}
                >
                  {t.text}
                </p>
                <button
                  className="show-more-btn"
                  onClick={() => toggleExpand(index)}
                >
                  {isExpanded ? "Show Less" : "Show More"}
                </button>
                <div className="stars">
                  {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
