import React from "react";
import { Link } from "react-router-dom";

const TwoColumnWithHeadline = ({
  mainHeadline = "Welcome to STS",
  imageSrc,
  smallHeadline = "Why Choose Us?",
  contentText = "We provide expert training and real-world projects to boost your career.",
  icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#1F2661"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      style={{ marginRight: "0.5rem" }}
    >
      <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
    </svg>
  ),
}) => {
  return (
    <>
      <style>{`
        .container {
          max-width: 960px;
          margin: 2rem auto;
          padding: 0 1rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .main-headline {
          text-align: center;
          font-size: 2rem;
          font-weight: 700;
          color: #1F2661;
          margin-bottom: 3rem;
          opacity: 0;
            text-transform: uppercase;

          animation: fadeSlideDown 1s forwards;
        }
        .two-column {
          display: flex;
          gap: 3rem;
          align-items: center;
          opacity: 0;
          animation: fadeSlideUp 1s 0.5s forwards;
          flex-wrap: wrap;
        }
        .left-image {
          flex: 1 1 45%;
          border-radius: 1rem;
          overflow: hidden;
          filter: drop-shadow(0 10px 25px rgba(0,0,0,0.1));
          cursor: pointer;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .left-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform 0.4s ease;
          border-radius: 1rem;
        }
        .left-image:hover {
          box-shadow: 0 20px 40px rgba(79,70,229,0.4);
          transform: translateY(-10px) scale(1.05);
        }
        .left-image:hover img {
          transform: scale(1.1);
        }
        .right-content {
          flex: 1 1 45%;
          color: #334155;
        }
        .small-headline {
          display: flex;
          align-items: center;
          font-weight: 600;
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #1F2661;
        }
        .content-text {
          font-size: 1.125rem;
          line-height: 1.6;
          color: #475569;
          text-align: justify;
        }

        @keyframes fadeSlideDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .two-column {
            flex-direction: column;
          }
          .left-image, .right-content {
            flex: 1 1 100%;
          }
          .main-headline {
            font-size: 1.5rem;
            margin-bottom: 2rem;
          }
        }
      `}</style>

      <div className="container">
        <h2 className="main-headline">{mainHeadline}</h2>
        <div className="two-column">
          <div className="left-image">
            <img src={imageSrc} alt="Visual representation" />
          </div>
          <div className="right-content">
            <div className="small-headline">
              {icon}
              {smallHeadline}
            </div>
            <p className="content-text">{contentText}</p>
                  <p className='link'> <Link to={'/about'}>want to know more?</Link> </p>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default TwoColumnWithHeadline;
