import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../Api"; // your API constant
import CardLoader from "./Loader/CardLoader";
import { useLocation } from "react-router-dom";

export default function PlacementShowcase() {
  const [placements, setPlacements] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation(); // get current URL

  useEffect(() => {
    const getPlacements = async () => {
      try {
        const res = await axios.get(`${API}/api/placements`);
        setPlacements(res.data);
      } catch (err) {
        console.error("Error fetching placements:", err);
      } finally {
        setLoading(false);
      }
    };

    getPlacements();
  }, []);

  // Helper function to build full image URL
  const getImageUrl = (file) => {
    if (!file) return "https://via.placeholder.com/300"; // fallback
    return `${API}/uploads/${file}`;
  };

  // Sort placements by package in descending order
  const sortedPlacements = [...placements].sort(
    (a, b) => parseFloat(b.package) - parseFloat(a.package)
  );

  // Determine which placements to show
  const displayedPlacements =
    location.pathname === "/" ? sortedPlacements.slice(0, 4) : sortedPlacements;

  return (
    <>
      <style>{`
        .placement-section { max-width: 1200px; margin: 0 auto; padding: 50px 20px; font-family: 'Segoe UI', sans-serif; }
        .placement-heading { text-align: center; font-size: 2.5rem; font-weight: bold; margin-bottom: 40px; color: #1F2661; }
        .placement-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; }
        .placement-card { background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 6px 20px rgba(0,0,0,0.08); transition: transform 0.3s ease, box-shadow 0.3s ease; position: relative; }
        .placement-card:hover { transform: translateY(-8px); box-shadow: 0 12px 30px rgba(0,0,0,0.12); }
        .placement-photo { width: 100%; height: 280px; object-fit: cover; }
        .placement-content { padding: 20px; text-align: center; }
        .student-name { font-size: 1.3rem; font-weight: bold; margin-bottom: 8px; color: #111827; }
        .student-role { font-size: 1rem; color: #4b5563; margin-bottom: 12px; }
        .company-name { font-size: 1rem; color: #1F2661; font-weight: 500; margin-bottom: 8px; }
        .lpa-badge { display: inline-block; background: #fbbf24; color: #000; padding: 6px 12px; border-radius: 20px; font-weight: bold; font-size: 0.9rem; }
      `}</style>

      <section className="placement-section">
        <h2 className="main-headline">Our Proud Placements</h2>
        <div className="placement-grid">
          {loading ? (
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <CardLoader />
              <CardLoader />
              <CardLoader />
            </div>
          ) : displayedPlacements.length === 0 ? (
            <p>No placements found.</p>
          ) : (
            displayedPlacements.map((p) => {
              const student = p.student;
              const company = p.company;

              return (
                <div key={p._id} className="placement-card loader-smooth">
                  <img
                    src={student ? getImageUrl(student.studentImage) : getImageUrl(company.companyImage)}
                    alt={student ? student.studentName : company.companyName}
                    className="placement-photo"
                  />
                  <div className="placement-content">
                    <h3 className="student-name">{student ? student.studentName : company.companyName}</h3>
                    <p className="student-role">{p.jobRole}</p>
                    <p className="company-name">{company.companyName}</p>
                    <span className="lpa-badge">{p.package}</span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    </>
  );
}
