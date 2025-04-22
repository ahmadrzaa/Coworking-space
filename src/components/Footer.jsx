// ------------------------------------------------------------
// © 2025 Ahmad Raza  (@ahmadrzaa on GitHub)
// All rights reserved. Do not distribute without permission.
// ------------------------------------------------------------




import React from "react";
import {
  FaEnvelope,
  FaHeadphones,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-wrap">
      {/* Top Row Icons */}
      <div className="footer-top-icons">
        <a href="mailto:digital@intermid.net">
          <FaEnvelope />
          <span>Send Email</span>
        </a>
        <a href="tel:+97334123546">
          <FaHeadphones />
          <span>Call us</span>
        </a>
      </div>

      {/* Social Media Title */}
      <h2 className="footer-social-heading">
        We are on <strong>Social Media</strong>
      </h2>

      {/* Social Icons */}
      <div className="footer-social-icons">
        <a href="https://instagram.com/axr.in_" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="https://wa.me/97334123546" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>
      </div>

      {/* Bottom Grid */}
      <div className="footer-bottom">
        <div className="footer-logo">
          <img src="Platform Business logo PDF1-01-01.png" alt="Platform Bahrain" />
         
        </div>
        <div className="footer-links-grid">
          <div>
            <strong>Home</strong>
          </div>
          <div>
            <strong>Workspaces</strong>
          </div>
          <div>
            <strong>Contact</strong>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
