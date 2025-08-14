import React from "react";

export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background: linear-gradient(135deg, #1f2937, #111827);
          color: #d1d5db;
          padding: 50px 20px 20px;
          font-family: 'Segoe UI', sans-serif;
        }
        .footer-container {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 30px;
        }
        .footer h3 {
          font-size: 1.3rem;
          color: #fff;
          margin-bottom: 15px;
          border-left: 4px solid #4f46e5;
          padding-left: 8px;
        }
        .footer p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #d1d5db;
        }
        .footer-links a {
          display: block;
          color: #9ca3af;
          text-decoration: none;
          margin-bottom: 8px;
          font-size: 0.95rem;
          transition: color 0.3s ease;
        }
        .footer-links a:hover {
          color: #4f46e5;
        }
        .social-icons {
          display: flex;
          gap: 10px;
          margin-top: 10px;
        }
        .social-icons a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 35px;
          height: 35px;
          background: #374151;
          color: white;
          border-radius: 50%;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }
        .social-icons a:hover {
          background: #4f46e5;
          transform: translateY(-3px);
        }
        .footer-bottom {
          text-align: center;
          font-size: 0.85rem;
          margin-top: 30px;
          color: #6b7280;
          border-top: 1px solid #374151;
          padding-top: 15px;
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">
          {/* About */}
          <div>
            <h3>STS Scope Tech</h3>
            <p>
              STS Scope Tech Software Solutions, Madurai – Providing industry-standard training, real-time
              projects, and placement opportunities. We nurture talent in Full Stack Development, Embedded
              Systems, Creative Arts, and more.
            </p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3>Quick Links</h3>
            <div className="footer-links">
              <a href="#">Home</a>
              <a href="#">About Us</a>
              <a href="#">Courses</a>
              <a href="#">Placements</a>
              <a href="#">Testimonials</a>
              <a href="#">Contact</a>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3>Our Courses</h3>
            <div className="footer-links">
              <a href="#">Full Stack Development</a>
              <a href="#">Embedded Systems</a>
              <a href="#">Resin Art & Drawing</a>
              <a href="#">Spoken English</a>
              <a href="#">Application & Final Year Projects</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3>Contact Us</h3>
            <p>📍 2nd Floor, XYZ Building, Madurai</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ info@stsscopetech.com</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          © {new Date().getFullYear()} STS Scope Tech Software Solutions | All Rights Reserved
        </div>
      </footer>
    </>
  );
}
