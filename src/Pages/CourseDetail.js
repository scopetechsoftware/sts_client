// src/pages/CourseDetails.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaClock, FaBook, FaArrowLeft, FaCheckCircle, FaMoneyBill, FaUserCheck } from "react-icons/fa";
import axios from "axios";
import { API } from "../Api";

export default function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`${API}/api/courses/${id}`);
        setCourse(res.data);
      } catch (error) {
        console.log("Can't fetch the course detail", error);
      }
    };
    fetchCourse();
  }, [id]);

  if (!course) return <h2 className="cd-loading">⏳ Loading course...</h2>;

  return (
    <div className="cd-wrapper">
      {/* Banner */}
      <div className="cd-banner">
        <img src={`${API}/uploads/${course.image}`} alt={course.courseName} />
        <div className="cd-banner-overlay">
          <h1>{course.courseName}</h1>
          <p>{course.courseCode}</p>
        </div>
      </div>

      {/* Details */}
      <div className="cd-content">
        {/* Info cards */}
        <div className="cd-info-grid">
          <div className="cd-info-card">
            <FaClock className="cd-icon" />
            <h3>{course.duration}</h3>
            <p>Duration</p>
          </div>
          <div className="cd-info-card">
            <FaMoneyBill className="cd-icon" />
            <h3>₹ {course.fees}</h3>
            <p>Course Fees</p>
          </div>
          <div className="cd-info-card">
            <FaUserCheck className="cd-icon" />
            <h3>{course.prerequire}</h3>
            <p>Prerequisite</p>
          </div>
        </div>

        {/* Description */}
        <section className="cd-section">
          <h2>About this course</h2>
          <p>{course.description}</p>
        </section>

        {/* Syllabus */}
        <section className="cd-section">
          <div className="cd-section-header">
            <FaBook className="cd-icon" />
            <h2>Syllabus</h2>
          </div>
          <ul className="cd-list">
            {course.syllabus.map((item, i) => (
              <li key={i} className="cd-list-item">
                <FaCheckCircle className="cd-tick" /> {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Back Button */}
        <div className="cd-back">
          <Link to="/course">
            <FaArrowLeft /> Back to Courses
          </Link>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .cd-wrapper {
          font-family: "Poppins", sans-serif;
          color: #1f2937;
        }

        /* Banner */
        .cd-banner {
          position: relative;
          height: 280px;
          
          overflow: hidden;
        }
        .cd-banner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.7);
        }
        .cd-banner-overlay {
          position: absolute;
          bottom: 20px;
          left: 20px;
          color: white;
        }
        .cd-banner-overlay h1 {
          font-size: 2rem;
          margin: 0;
        }
        .cd-banner-overlay p {
          margin: 5px 0 0;
          font-size: 1rem;
          opacity: 0.9;
        }

        /* Content */
        .cd-content {
          margin-top: 20px;
          padding: 5%;
        }

        /* Info Cards */
        .cd-info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 15px;
        }
        .cd-info-card {
          background: #f9fafb;
          border-radius: 10px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
        }
        .cd-info-card h3 {
          margin: 10px 0 5px;
          font-size: 1.2rem;
          color: #111827;
        }
        .cd-info-card p {
          color: #6b7280;
          font-size: 0.9rem;
        }
        .cd-icon {
          font-size: 1.5rem;
          color: #4f46e5;
        }

        /* Sections */
        .cd-section {
          margin-top: 25px;
          padding: 20px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
        }
          .cd-section {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 0.8s ease forwards;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
        .cd-section h2 {
          margin-bottom: 12px;
          color: #374151;
        }
        .cd-section p {
          line-height: 1.6;
          color: #4b5563;
        }

        /* List */
        .cd-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .cd-list-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 0;
          border-bottom: 1px solid #e5e7eb;
        }
        .cd-list-item:last-child {
          border-bottom: none;
        }
        .cd-tick {
          color: #22c55e;
        }
.cd-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
  transform: scale(1.05);
  animation: zoomOut 1.5s ease forwards;
}

@keyframes zoomOut {
  to {
    transform: scale(1);
  }
}
.cd-info-card {
  background: #f9fafb;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.cd-info-card:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
}
.cd-list-item {
  opacity: 0;
  transform: translateX(-20px);
  animation: slideIn 0.6s ease forwards;
}
.cd-list-item:nth-child(1) { animation-delay: 0.1s; }
.cd-list-item:nth-child(2) { animation-delay: 0.2s; }
.cd-list-item:nth-child(3) { animation-delay: 0.3s; }
/* keep increasing delay for smooth stagger */

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

        /* Back Button */
        .cd-back {
          margin-top: 30px;
        }
        .cd-back a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #eef2ff;
          color: #4f46e5;
          padding: 10px 16px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 500;
          transition: background 0.3s;
        }
        .cd-back a:hover {
          background: #c7d2fe;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .cd-banner {
            height: 200px;
          }
          .cd-banner-overlay h1 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
