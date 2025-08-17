import React from "react";
import augustin from '../Assets/agustin.png';
import sankar from '../Assets/sankar manoj.png';
import shruti from '../Assets/shruthika.png';


export default function PlacementShowcase() {
  const placements = [
    {
      name: "Agustin Durai J",
      role: "Junior Developer",
      company: "Strategic Industry Solutions",
      lpa: "5",
      photo: augustin,
    },
    {
      name: "Sankar Manoj",
      role: "Accentuate",
      company: "TCS",
      lpa: "2.35",
      photo:sankar,
    },
    {
      name: "Vignesh R",
      role: "Android Developer",
      company: "Info career private limited",
      lpa: "1.92",
      photo:shruti,
    },
  ];

  return (
    <>
      <style>{`
        .placement-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 50px 20px;
          font-family: 'Segoe UI', sans-serif;
        }
        .placement-heading {
          text-align: center;
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 40px;
          color: #1F2661;
        }
        .placement-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }
        .placement-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
        }
        .placement-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.12);
        }
        .placement-photo {
          width: 100%;
          height: 280px;
          object-fit: cover;
        }
        .placement-content {
          padding: 20px;
          text-align: center;
        }
        .student-name {
          font-size: 1.3rem;
          font-weight: bold;
          margin-bottom: 8px;
          color: #111827;
        }
        .student-role {
          font-size: 1rem;
          color: #4b5563;
          margin-bottom: 12px;
        }
        .company-name {
          font-size: 1rem;
          color: #1F2661;
          font-weight: 500;
          margin-bottom: 8px;
        }
        .lpa-badge {
          display: inline-block;
          background: #fbbf24;
          color: #000;
          padding: 6px 12px;
          border-radius: 20px;
          font-weight: bold;
          font-size: 0.9rem;
        }
      `}</style>

      <section className="placement-section">
        <h2 className="main-headline">Our Proud Placements</h2>
        <div className="placement-grid">
          {placements.map((p, index) => (
            <div key={index} className="placement-card">
              <img
                src={p.photo}
                alt={p.name}
                className="placement-photo"
              />
              <div className="placement-content">
                <h3 className="student-name">{p.name}</h3>
                <p className="student-role">{p.role}</p>
                <p className="company-name">{p.company}</p>
                <span className="lpa-badge">{p.lpa} LPA</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
