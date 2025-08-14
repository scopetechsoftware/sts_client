// src/pages/CourseDetails.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import { courses } from "../data/courses";
import { FaClock, FaBook, FaProjectDiagram, FaArrowLeft, FaCheckCircle } from "react-icons/fa";


export default function CourseDetails() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course) return <h2 className="cd-not-found">❌ Course not found</h2>;

  return (
    <div className="cd-container">
      {/* Banner */}
      <div className="cd-banner">
        <img src={course.image} alt={course.title} />
        <div className="cd-banner-text">
          <h1>{course.title}</h1>
        </div>
      </div>

      {/* Description */}
      <section className="cd-section cd-desc-card">
        <p>{course.details.description}</p>
      </section>

      {/* Schedule */}
      <section className="cd-section">
        <div className="cd-section-header">
          <FaClock className="cd-icon" />
          <h2>Schedule</h2>
        </div>
        <p>{course.details.schedule}</p>
      </section>

      {/* Syllabus */}
     <section className="cd-section">
  <div className="cd-section-header">
    <FaBook className="cd-icon" />
    <h2>Syllabus</h2>
  </div>
  <ul className="cd-list">
    {course.details.syllabus.map((item, i) => (
      <li key={i} className="cd-list-item">
        <FaCheckCircle className="cd-tick" /> {item}
      </li>
    ))}
  </ul>
</section>

      {/* Projects */}
      <section className="cd-section">
        <div className="cd-section-header">
          <FaProjectDiagram className="cd-icon" />
          <h2>Projects</h2>
        </div>
        <ul className="cd-list">
          {course.details.projects.map((proj, i) => (
            <li key={i}>{proj}</li>
          ))}
        </ul>
      </section>

      {/* Back Button */}
      <div className="cd-back">
        <Link to="/course">
          <FaArrowLeft /> Back to Courses
        </Link>
      </div>

      {/* Styles */}
      <style jsx>{`
        .cd-container {
          max-width: 900px;
          margin: auto;
          padding: 20px;
          font-family: "Poppins", sans-serif;
        }
        /* Banner */
        .cd-banner {
          position: relative;
          height: 320px;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
        }
        .cd-banner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.8);
        }
        .cd-banner-text {
          position: absolute;
          bottom: 20px;
          left: 20px;
          color: white;
          background: rgba(0, 0, 0, 0.4);
          padding: 10px 15px;
          border-radius: 8px;
          font-size: 1.8rem;
          font-weight: bold;
        }
        /* Sections */
        .cd-section {
          background: white;
          margin-top: 20px;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .cd-section:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
        }
        /* Section Header */
        .cd-section-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
          color: #4f46e5;
        }
        .cd-icon {
          font-size: 1.4rem;
        }
        /* Description Card */
        .cd-desc-card {
          background: linear-gradient(135deg, #6d28d9, #3b82f6);
          color: white;
          font-size: 1.1rem;
          line-height: 1.6;
        }
        /* List */
        .cd-list {
          padding: 0;
          list-style: none;
        }
        .cd-list li {
          padding: 8px 0;
          border-bottom: 1px solid #eee;
          font-size: 1rem;
        }
        /* Back Button */
        .cd-back {
          margin-top: 25px;
        }
        .cd-back a {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: #4f46e5;
          text-decoration: none;
          font-weight: bold;
          background: #e0e7ff;
          padding: 8px 14px;
          border-radius: 8px;
          transition: background 0.3s;
        }
        .cd-back a:hover {
          background: #c7d2fe;
        }
        /* Responsive */
        @media (max-width: 600px) {
          .cd-banner {
            height: 220px;
          }
          .cd-banner-text {
            font-size: 1.4rem;
          }
        }
          .cd-list-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  font-size: 1rem;
}

.cd-tick {
  color: #22c55e; /* Tailwind green-500 */
  font-size: 1.1rem;
}

      `}</style>
    </div>
  );
}
