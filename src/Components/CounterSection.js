import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import co from '../Assets/comp.png'
import { FaUserGraduate, FaBriefcase, FaGlobe, FaMedal } from "react-icons/fa";

const statsData = [
  { label: "Students", value: 2000, icon: <FaUserGraduate size={28} color="#b637d5ff" /> },
  { label: "Placements", value: 1500, icon: <FaBriefcase size={28} color="#e3e638ff" /> },
  { label: "Branches", value: 2, icon: <FaGlobe size={28} color="#18e1ecff" /> },
  { label: "Years of Experience", value: 4, icon: <FaMedal size={28} color="#f59e0b" /> },
];

export default function CounterSection() {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!inView) return;

    const intervals = statsData.map((stat, index) => {
      const increment = Math.ceil(stat.value / 100); // speed of counting
      return setInterval(() => {
        setCounts(prev => {
          const newCounts = [...prev];
          if (newCounts[index] < stat.value) {
            newCounts[index] += increment;
            if (newCounts[index] > stat.value) newCounts[index] = stat.value;
          }
          return newCounts;
        });
      }, 20);
    });

    return () => intervals.forEach(i => clearInterval(i));
  }, [inView]);

  return (
    <>
      <style>{`
        .ca-container {
          display: flex;
          justify-content: space-around;
          background-color: #777;
          padding: 60px 20px;
          color: #fff;
          text-align: center;
          flex-wrap: wrap;
          background: url(${co});
          background-position: center;
          background-attachment: fixed;
        }
        .ca-stat {
          flex: 1 1 200px;
          margin: 20px;
        }
        .ca-icon {
          font-size: 45px;
          margin-bottom: 15px;
          display: block;
        }
        .ca-number {
          font-size: 2rem;
          font-weight: bold;
        }
        .ca-label {
          font-size: 1rem;
          margin-top: 5px;
        }
      `}</style>
      <div className="ca-container" ref={ref}>
        {statsData.map((stat, index) => (
          <div key={index} className="ca-stat">
            <span className="ca-icon">{stat.icon}</span>
            <div className="ca-number">{counts[index]} +</div>
            <div className="ca-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </>
  );
}
