// src/pages/CoursesPage.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API } from "../Api";

export default function Course() {
  const [courses, setCourse] = useState([]);

  const styles = {
    container: { padding: "20px" },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
    },
    card: {
      position: "relative",
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      overflow: "hidden",
    },
    ribbon: {
      position: "absolute",
      top: "10px",
      right: "-30px",
      background: "linear-gradient(135deg, #ff4e50, #f9d423)",
      color: "#fff",
      padding: "5px 40px",
      transform: "rotate(45deg)",
      fontSize: "12px",
      fontWeight: "bold",
      boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
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
    offerText: {
      marginTop: "8px",
      fontSize: "13px",
      fontWeight: "bold",
      color: "#e63946",
    },
  };

  const fetchCourse = async () => {
    try {
      const res = await axios.get(`${API}/api/courses`);
      setCourse(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCourse();
  }, []);

  // Filter courses by type (make sure your backend sends `type` field)
  const professionalCourses = courses.filter((c) => c.type === "Professional");
  const basicCourses = courses.filter((c) => c.type === "Basic");
  const businessCourses = courses.filter((c) => c.type === "Advance");

  // helper to render a section
  const renderCourseSection = (title, courseList) =>
    courseList.length > 0 && (
      <>
        <h2 className="new-headline">{title}</h2>
        <div style={styles.container}>
          <div style={styles.grid} >
            {[...courseList].reverse().map((course) => (
              <div key={course._id} style={styles.card} className="course-card">
                {course.offer && <div style={styles.ribbon}>OFFER</div>}

                <img
                  src={`${API}/uploads/${course.image}`}
                  alt={course.courseName}
                  style={styles.img}
                />
                <div style={styles.content}>
                  <div style={styles.title}>{course.courseName}</div>
                  <div style={styles.desc}>{course.prerequire}</div>

                  {course.offer && (
                    <div style={styles.offerText}>{course.offer}</div>
                  )}

                  <Link to={`/course/${course._id}`} style={styles.link}>
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );

  return (
    <div>
      <div className="about-banner">
        <div className="about-banner-overlay">
          <h1 className="about-banner-text">Training</h1>
        </div>
      </div>

      {renderCourseSection("Professional Courses", professionalCourses)}
      {renderCourseSection("Basic Courses", basicCourses)}
      {renderCourseSection("Business Courses", businessCourses)}
    </div>
  );
}
