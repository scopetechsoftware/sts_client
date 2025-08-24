// src/pages/ProjectHome.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API } from '../../Api';
import { Link } from 'react-router-dom';


export default function ProjectHome() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${API}/api/projects`);
        setProjects(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProjects();
  }, []);

  const categories = ["All", "Python", "Java", ".NET", "MERN", "Mini", "PHP"];

  const defaultContent = {
    All: {
      title: "Welcome to Our Project Hub!",
      description:
        "Dive into a diverse collection of innovative projects across all technologies. Explore, learn, and get inspired!"
    },
    Python: {
      title: "Python Powerhouse 🐍",
      description:
        "From AI to automation, our Python projects showcase creativity and intelligence. Perfect for innovators and coders alike!"
    },
    Java: {
      title: "Java Journeys ☕",
      description:
        "Robust, scalable, and dynamic – our Java projects bring enterprise-level solutions and exciting web applications to life."
    },
    ".NET": {
      title: "DotNET Dreams 💻",
      description:
        "Experience the power of Microsoft technologies! Our .NET projects cover web apps, desktop solutions, and cloud innovation."
    },
    MERN: {
      title: "MERN Marvels ⚡",
      description:
        "Full-stack development at its finest! Explore MERN projects with React, Node.js, MongoDB, and Express for modern web apps."
    },
    Mini: {
      title: "Mini Magic ✨",
      description:
        "Quick, creative, and clever – our Mini projects are perfect for experimentation, prototypes, and small-scale innovations."
    },
    PHP: {
      title: "PHP Playground 🌐",
      description:
        "Dynamic web applications come alive with our PHP projects. Learn, explore, and build interactive websites effortlessly!"
    }
  };

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (p) => p.technology.toLowerCase() === filter.toLowerCase()
        );

  return (
    <div className="cad-container">
      <aside className="ca-sidebar">
     
        <ul className="ca-category-list">
          {categories.map((cat) => (
            <li
              key={cat}
              className={`ca-category-item ${filter === cat ? "ca-active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>
      </aside>

      <main className="ca-main">
        <h1 className="ca-main-title">
          {filter === "All" ? "All Projects" : `${filter} Projects`}
        </h1>

        {/* Default content / intro message */}
        <div className="ca-default-content">
          {/* <h2 className="ca-content-title">{defaultContent[filter].title}</h2> */}
          <p className="ca-content-description">{defaultContent[filter].description}</p>
        </div>

        <div className="ca-project-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((proj) => (
              <div key={proj._id} className="ca-project-card">
                <h3 className="ca-project-title">{proj.projectTitle}</h3>
                <p className="ca-project-code">{proj.projectCode}</p>
                <p className="ca-project-tech">
                  <strong>Tech:</strong> {proj.technology}
                </p>
                <p className="ca-project-category">
                  <strong>Category:</strong> {proj.category}
                </p>
                <button className="ca-view-btn">
                  <Link to={`/project/details/${proj._id}`}>View Details</Link>
                </button>
              </div>
            ))
          ) : (
            <div className="ca-no-projects">
              <p>No projects found in this category yet. Stay tuned!</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
