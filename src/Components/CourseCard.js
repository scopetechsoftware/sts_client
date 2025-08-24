import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../Api";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import webdesign from '../Assets/webdesing.png';
import digi from '../Assets/digitalMarget.png';
import fullstack from '../Assets/fullstack.png';
import LiCardLoader from "./Loader/ListLoader";
const CourseCard = () => {
  const [course, setCourse] = useState([]);
  const [bcourse, setbCourse] = useState([]);
  const [pcourse, setpCourse] = useState([]);
  const [buicourse, setbuiCourse] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCourse = async () => {
    try {
      const res = await axios.get(`${API}/api/courses`);
      setCourse(res.data);

      const p = res.data
        ?.filter((val) => val.type === "Professional")
        ?.map((val) => ({courseName: val.courseName, id: val._id}));
      const bui = res.data
        ?.filter((val) => val.type === "Advance")
        ?.map((val) => ({courseName: val.courseName, id: val._id}));
      const b = res.data
        ?.filter((val) => val.type === "Basic")
        ?.map((val) => ({courseName: val.courseName, id: val._id}));

      setbCourse(b);
      setpCourse(p);
      setbuiCourse(bui);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCourse();
  }, []);

  const courses = [
    {
      type: "Basic",
      image: webdesign,
      description: "Perfect for beginners starting their IT journey.",
      list: bcourse,
      colorClass: "ccd-blue",
    },
    {
      type: "Professional",
      image: fullstack,
      description: "For professionals who want to upskill and specialize.",
      list: pcourse,
      colorClass: "ccd-green",
    },
    {
      type: "Advanced",
      image: digi,
      description: "Advanced-level courses for industry experts.",
      list: buicourse,
      colorClass: "ccd-purple",
    },
  ];

  return (
    <div className="ccd-container loader-smooth">
   
      <div className="ccd-grid">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="ccd-card"
          >
            <div className="ccd-image-wrapper">
              <img
                src={course.image}
                alt={course.type}
                className="ccd-image"
              />
            </div>
            <div className="ccd-content">
              <h3 className="ccd-type">{course.type}</h3>
              <p className="ccd-desc">{course.description}</p>
              <ul className="ccd-list loader-smooth">
                
                {!loading ? course.list.map((item, i) => (
                     <Link to={`/course/${item.id}`}>
                  <li
                    key={i}
                    className={`ccd-item ${course.colorClass}`}
                  >
                   {item.courseName}
                  </li>
                  </Link> 
                )) : <LiCardLoader/>}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;
