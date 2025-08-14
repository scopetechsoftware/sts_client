// src/pages/CoursesPage.js
import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../data/courses";

export default function Course() {
  const styles = {
    container: { padding: "20px" },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
    },
    card: {
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      overflow: "hidden",
    },
    img: { width: "100%", height: "180px", objectFit: "cover" },
    content: { padding: "15px" },
    title: { fontSize: "18px", fontWeight: "bold" },
    desc: { fontSize: "14px", margin: "10px 0" },
    link: {
      display: "inline-block",
      background: "linear-gradient(135deg, #6a11cb, #2575fc)",
      color: "#fff",
      padding: "8px 14px",
      borderRadius: "5px",
      textDecoration: "none",
    },
  };

  return (
    <div>
      <div className="about-banner">
        <div className="about-banner-overlay">
          <h1 className="about-banner-text">Training</h1>
        </div>
      </div>
    <div style={styles.container}>
         
      <h1>Our Courses</h1>
      <div style={styles.grid}>
        {courses.map((course) => (
          <div key={course.id} style={styles.card}>
            <img src={course.image} alt={course.title} style={styles.img} />
            <div style={styles.content}>
              <div style={styles.title}>{course.title}</div>
              <div style={styles.desc}>{course.shortDesc}</div>
              <Link to={`/course/${course.id}`} style={styles.link}>
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
