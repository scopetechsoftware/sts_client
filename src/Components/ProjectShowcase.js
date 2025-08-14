import React from "react";

export default function ProjectShowcase() {
  const sections = [
    {
      title: "Final Year Projects",
      description:
        "We provide high-quality, industry-relevant final year projects with complete documentation and guidance.",
      points: [
        "Guidance from experienced mentors",
        "Latest trending topics and technologies",
        "Full source code with explanation",
        "Support for presentations & viva",
      ],
      image:
        "https://images.unsplash.com/photo-1581090700227-4c4f50b1a43f?auto=format&fit=crop&w=800&q=60",
   
      reverse: false,
    },
    {
      title: "Application Projects",
      description:
        "Our application projects focus on practical solutions to real-world problems, tailored for various industries.",
      points: [
        "Mobile and web applications",
        "User-friendly UI & UX",
        "Database integration",
        "Deployment and maintenance support",
      ],
     
      image:
        "https://images.unsplash.com/photo-1581091870697-1c8c1b92c3db?auto=format&fit=crop&w=800&q=60",
      reverse: true,
    },
    {
      title: "Real-Time Projects",
      description:
        "Get hands-on experience with live, running projects that simulate real industry environments.",
      points: [
        "Work with live data",
        "Team collaboration experience",
        "Exposure to agile development",
        "Boosts portfolio & employability",
      ],
      image: 
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=800&q=60",
      reverse: false,
    },
  ];

  return (
    <>
      <style>{`
        .project-section {
          max-width: 1100px;
          margin: 0 auto;
          padding: 60px 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .project-row {
          display: flex;
          align-items: center;
          gap: 40px;
          margin-bottom: 80px;
          flex-wrap: wrap;
        }
        .project-row.reverse {
          flex-direction: row-reverse;
        }
        .project-image {
          flex: 1 1 45%;
          overflow: hidden;
          border-radius: 15px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          transition: transform 0.5s ease;
        }
        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .project-image:hover img {
          transform: scale(1.08);
        }
        .project-content {
          flex: 1 1 50%;
          animation: fadeSlideUp 1s ease forwards;
          opacity: 0;
        }
        .project-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 15px;
          color: #4f46e5;
        }
        .project-desc {
          font-size: 1.1rem;
          margin-bottom: 20px;
          color: #475569;
        }
        .project-points {
          list-style: none;
          padding: 0;
        }
        .project-points li {
          position: relative;
          padding-left: 30px;
          margin-bottom: 12px;
          font-size: 1rem;
          color: #334155;
        }
        .project-points li::before {
          content: "✔";
          position: absolute;
          left: 0;
          color: #4f46e5;
          font-weight: bold;
        }
        /* Animation */
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        /* Responsive */
        @media (max-width: 768px) {
          .project-row {
            flex-direction: column !important;
          }
          .project-image, .project-content {
            flex: 1 1 100%;
          }
          .project-title {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <section className="project-section">
        {sections.map((sec, idx) => (
          <div
            key={idx}
            className={`project-row ${sec.reverse ? "reverse" : ""}`}
          >
            <div className="project-image">
              <img src={sec.image} alt={sec.title} />
            </div>
            <div className="project-content">
              <h2 className="project-title">{sec.title}</h2>
              <p className="project-desc">{sec.description}</p>
              <ul className="project-points">
                {sec.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
