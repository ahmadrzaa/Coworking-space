// ------------------------------------------------------------
// © 2025 Ahmad Raza  (@ahmadrzaa on GitHub)
// All rights reserved. Do not distribute without permission.
// ------------------------------------------------------------




import React from "react";
import "./SectionTwo.css";

function SectionTwo() {
  return (
    <section className="section-two">
      <div className="section-two__container">
        <div className="section-two__glassbox">
          <div className="section-two__left">
            <div className="section-two__stripe"></div>
            <div className="section-two__text">
              <h2>
                Driving <br />
                Business Growth <br />
                with <br />
                Smart Infrastructure
              </h2>
              <p>
                Enabling entrepreneurs and enterprises through flexible workspaces,<br />
                tech-driven support, and collaborative innovation in Bahrain.
              </p>
            </div>
          </div>

          <div className="section-two__right">
            <img src="platfrom3.webp" alt="Platform Bahrain Innovation" />
          </div>
        </div>

        <div className="section-two__buttons">
          <button className="btn btn-blue">Our Story</button>
          <button className="btn btn-lightblue">Team</button>
          <button className="btn btn-gray">Experts</button>
          <button className="btn btn-orange">Partners</button>
          <button className="btn btn-red">Testimonials</button>
          <button className="btn btn-darkred">Cases</button>
        </div>
      </div>

      <div className="chatbot-button" onClick={() => alert("Chatbot opened")}>
        <i className="fas fa-comment-alt"></i>
      </div>
    </section>
  );
}

export default SectionTwo;
