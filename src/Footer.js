import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-right">
          <a href="#facebook" className="social-link">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#twitter" className="social-link">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#instagram" className="social-link">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <div className="footer-left">
          <p>&copy; 2025 TravelSite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
