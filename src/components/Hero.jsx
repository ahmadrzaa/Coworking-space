// ------------------------------------------------------------
// © 2025 Ahmad Raza  (@ahmadrzaa on GitHub)
// All rights reserved. Do not distribute without permission.
// ------------------------------------------------------------




import React from "react";
import "./Hero.css";
import { FaYoutube } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__overlay">
        <div className="hero__glassbox animated-border">
          <div className="hero__content">
            <h1 className="hero__title">
              Empowering Bahrain’s Innovators through Smart Workspaces
            </h1>
            <p className="hero__subtitle">
              Join our ecosystem of creators, startups, and professionals.<br />
              Explore tailored coworking spaces, business support,<br />
              and digital transformation solutions.
            </p>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="hero__youtube"
            >
              <FaYoutube className="hero__youtube-icon" />
              <span>Watch on YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
