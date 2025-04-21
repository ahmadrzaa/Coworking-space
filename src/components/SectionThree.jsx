// ------------------------------------------------------------
// © 2025 Ahmad Raza  (@ahmadrzaa on GitHub)
// All rights reserved. Do not distribute without permission.
// ------------------------------------------------------------





import React from "react";
import "./SectionThree.css";

function SectionThree() {
  return (
    <section className="section-three">
      <div className="section-three__wrapper">
        <div className="section-three__left">
          <h2>
            At <span>Platform Bahrain</span>
          </h2>
        </div>

        <div className="section-three__center">
          <p>
            Our mission is to empower organizations to transform their
            businesses by providing expert guidance, practical solutions, and
            unparalleled access to the latest trends and technologies. We are
            dedicated to being a trusted partner, helping our clients navigate
            the rapidly evolving landscape of innovation.
            <br /><br />
            Platform Bahrain provides coworking spaces, private desks, and
            office rooms for rent on monthly, quarterly, and yearly terms. We
            offer affordable architect and interior design services,
            eco-friendly environments, and fully equipped workspaces with
            high-speed Wi-Fi and smart meeting rooms.
          </p>
        </div>

        <div className="section-three__right">
          <div className="mission-box">
            <span>Company Mission Statement</span>
            <div className="circle-icon">
              <i className="fas fa-adjust"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionThree;
