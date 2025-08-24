// src/pages/CoursesPage.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API } from "../Api";
import CardLoader from "../Components/Loader/CardLoader";

  
export default function Course() {
  const [courses, setCourse] = useState([]);
const [loading, setLoading] = useState(true);
  const fetchCourse = async () => {
    try {
      const res = await axios.get(`${API}/api/courses`);
      setCourse(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(true);

    }
  };

  useEffect(() => {
    fetchCourse();
  }, []);

  const professionalCourses = courses.filter((c) => c.type === "Professional");
  const basicCourses = courses.filter((c) => c.type === "Basic");
  const businessCourses = courses.filter((c) => c.type === "Advance");

  const renderCourseSection = (title, courseList) =>
    courseList.length > 0 && (
      <div className="cs-course-section loader-smooth">
        <h2 className="cs-course-title">{title}</h2>
        <div className="cs-course-grid">
          {[...courseList].reverse().map((course) => (
            <div key={course._id} className="cs-course-card">
              {course.offer && <div className="cs-ribbon">OFFER</div>}
              <img
                src={`${API}/uploads/${course.image}`}
                alt={course.courseName}
                className="cs-course-image"
              />
              <div className="cs-course-content">
                <div className="cs-course-name">{course.courseName}</div>
                <div className="cs-course-desc">{course.prerequire}</div>
                {course.offer && <div className="cs-offer-text">{course.offer}</div>}
                <Link to={`/course/${course._id}`} className="cs-course-link">
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );

  return (
    <div>
      <div className="about-banner">
        <div className="about-banner-overlay">
          <h1 className="about-banner-text">Training</h1>
        </div>
      </div>

      {loading ? (
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap',padding: '30px' }}>
    <CardLoader /><CardLoader /><CardLoader /><CardLoader />
  </div>
) : (
  renderCourseSection("Professional Courses", professionalCourses)
)}

  {loading ? (
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' ,padding: '30px'}}>
    <CardLoader /><CardLoader /><CardLoader /><CardLoader />
  </div>
) : (
 renderCourseSection("Basic Courses", basicCourses)
)}

  {loading ? (
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' , padding: '30px'}}>
    <CardLoader /><CardLoader /><CardLoader /><CardLoader />
  </div>
) : (
renderCourseSection("Business Courses", businessCourses) 
)}

   
      
    </div>
  );
}
