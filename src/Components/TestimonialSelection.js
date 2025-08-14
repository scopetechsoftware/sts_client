import React from "react";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Arun Kumar",
      role: "Software Engineer @ Infosys",
      photo: "https://randomuser.me/api/portraits/men/11.jpg",
      text: "STS helped me gain real-world project experience. The faculty is excellent, and the placement support is outstanding.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Frontend Developer @ TCS",
      photo: "https://randomuser.me/api/portraits/women/22.jpg",
      text: "The courses are practical and industry-focused. I loved the hands-on projects and the guidance I received.",
      rating: 4,
    },
    {
      name: "Vignesh R",
      role: "Embedded Systems Engineer @ Wipro",
      photo: "https://randomuser.me/api/portraits/men/33.jpg",
      text: "The best institute in Madurai! Great mentors, excellent learning atmosphere, and real-time project exposure.",
      rating: 5,
    },
  ];

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
          color: #4f46e5;
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
          border: 3px solid #4f46e5;
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
          margin-bottom: 15px;
        }
        .stars {
          color: #fbbf24;
          font-size: 1rem;
        }
      `}</style>

      <section className="testimonial-section">
        <h2 className="testimonial-heading">What Our Students Say</h2>
        <div className="testimonial-grid">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <img src={t.photo} alt={t.name} className="testimonial-photo" />
              <h3 className="testimonial-name">{t.name}</h3>
              <p className="testimonial-role">{t.role}</p>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="stars">
                {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
