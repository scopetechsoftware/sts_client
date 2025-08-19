import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const getEmbedUrl = (url) => {
    if (!url) return "";
    let videoId = "";

    if (url.includes("v=")) {
      videoId = url.split("v=")[1].split("&")[0]; // standard YouTube URL
    } else if (url.includes("youtu.be")) {
      videoId = url.split("/").pop(); // short URL
    } else {
      return ""; // invalid URL
    }

    return `https://www.youtube.com/embed/${videoId}`;
  };

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/projects/${id}`);
        setProject(res.data);
      } catch (err) {
        console.error("Error fetching project:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  if (loading) return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading...</p>;
  if (!project) return <p style={{ textAlign: "center", marginTop: "50px" }}>Project not found!</p>;

  return (
    <div style={{ maxWidth: "1000px", margin: "40px auto", padding: "20px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      {/* Project Header */}
      <div style={{ background: "#1F2661", color: "#fff", padding: "25px", borderRadius: "10px", boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>{project.projectTitle}</h1>
        <p style={{ fontSize: "1.2rem", color: "#ddd", marginBottom: "5px" }}>{project.category}</p>
        <p style={{ fontWeight: "500" }}><strong>Technology:</strong> {project.technology}</p>
        <p style={{ fontWeight: "500" }}><strong>Algorithm:</strong> {project.algorithm}</p>
        <p style={{ fontWeight: "500" }}><strong>Cost:</strong> ₹{project.projectCost}</p>
      </div>

      {/* Abstract Section */}
      <div style={{ marginTop: "30px", background: "#f5f5f5", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
        <h2 style={{ color: "#1F2661", marginBottom: "10px" }}>Abstract</h2>
        <p style={{ lineHeight: "1.8", fontSize: "1.1rem", color: "#333" }}>{project.abstract}</p>
      </div>

      {/* Video Section */}
      {project.video && getEmbedUrl(project.video) && (
        <div style={{ marginTop: "30px" }}>
          <h2 style={{ color: "#1F2661", marginBottom: "15px" }}>Video Demonstration</h2>
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "10px", boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}>
            <iframe
              title="Project Video"
              src={getEmbedUrl(project.video)}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: "10px" }}
            ></iframe>
          </div>
        </div>
      )}

      {/* System Sections */}
      <div style={{ marginTop: "30px", display: "grid", gap: "20px" }}>
        <div style={{ background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
          <h3 style={{ color: "#1F2661" }}>Existing System</h3>
          <p style={{ lineHeight: "1.6", color: "#333" }}>{project.existing}</p>
        </div>
        <div style={{ background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
          <h3 style={{ color: "#1F2661" }}>Proposed System</h3>
          <p style={{ lineHeight: "1.6", color: "#333" }}>{project.proposed}</p>
        </div>
        <div style={{ background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
          <h3 style={{ color: "#1F2661" }}>System Requirements</h3>
          <p style={{ lineHeight: "1.6", color: "#333" }}>{project.systemRequirements}</p>
        </div>
      </div>

      {/* Documentation Link
      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "#1F2661",
            color: "#fff",
            padding: "12px 25px",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "1.1rem",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            transition: "0.3s"
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = "#3b47a6"}
          onMouseLeave={(e) => e.currentTarget.style.background = "#1F2661"}
        >
          View Project Documentation
        </a>
      </div> */}
    </div>
  );
};

export default ProjectDetailsPage;
