import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../Projects/ClientProjects.css";
import { Link } from "react-router-dom";

const ClientProjects = () => {
  const { tech } = useParams();
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const [minCost, setMinCost] = useState("");
  const [maxCost, setMaxCost] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/projects");

        // Filter by technology
        let filtered = res.data.filter(
          project => project.technology.toLowerCase() === tech.toLowerCase()
        );

        // Sort by newest first (descending)
        filtered.sort((a, b) => (b._id > a._id ? 1 : -1));

        setProjects(filtered);
        setFilteredProjects(filtered); // initially show all
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, [tech]);


  const handleFilter = () => {
    const min = minCost ? parseFloat(minCost) : 0;
    const max = maxCost ? parseFloat(maxCost) : Infinity;

    const filtered = projects.filter(project => {
      const cost = parseFloat(project.projectCost);
      return cost >= min && cost <= max;
    });

    setFilteredProjects(filtered);
  };

  return (
    <div className="project-section">
      <h1>{tech} Projects</h1>

      {/* Filter Section */}
      <div style={{ margin: "20px 0", display: "flex", gap: "10px", alignItems: "center" }}>
        <input
          type="number"
          placeholder="Min Cost"
          value={minCost}
          onChange={e => setMinCost(e.target.value)}
          style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc", width: "120px" }}
        />
        <input
          type="number"
          placeholder="Max Cost"
          value={maxCost}
          onChange={e => setMaxCost(e.target.value)}
          style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc", width: "120px" }}
        />
        <button
          onClick={handleFilter}
          style={{ padding: "8px 15px", borderRadius: "5px", border: "none", background: "#1F2661", color: "#fff", cursor: "pointer" }}
        >
          Filter
        </button>
      </div>

      {loading ? (
        <p style={{ textAlign: "center" }}>Loading projects...</p>
      ) : filteredProjects.length === 0 ? (
        <p style={{ textAlign: "center" }}>No projects found.</p>
      ) : (
        <div className="table-container">
          <table className="project-table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Title</th>
                <th>Technology</th>
                <th>Category</th>
                <th>Algorithm</th>
                <th>Cost</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map((project) => (
                <tr key={project._id}>
                  <td>{project.projectCode}</td>
                  <td>
                    <Link to={`/project/details/${project._id}`}>
                      {project.projectTitle}
                    </Link>
                  </td>
                  <td>{project.technology}</td>
                  <td>{project.category}</td>
                  <td>{project.algorithm}</td>
                  <td>₹{project.projectCost}</td>
                  <td>
                    {project.link ? (
                      <a
                        href={`https://wa.me/8428146470?text=${encodeURIComponent(
                          `Project Details:\nCode: ${project.projectCode}\nTitle: ${project.projectTitle}\nTechnology: ${project.technology}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="table-link"
                      >
                        View
                      </a>
                    ) : (
                      <span style={{ color: "gray" }}>No Link</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ClientProjects;
