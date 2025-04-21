// ------------------------------------------------------------
// © 2025 Ahmad Raza  (@ahmadrzaa on GitHub)
// All rights reserved. Do not distribute without permission.
// ------------------------------------------------------------




import React from "react";
import Slider from "react-slick";
import "./Testimonials.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLinkedin, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Fatima A.",
    title: "Startup Founder",
    rating: "4.9",
    linkedin: "https://linkedin.com/in/fatima",
    quote:
      "Platform Bahrain transformed our working rhythm. The vibe, energy, and workspace felt like a creative home.",
  },
  {
    name: "Ahmed R.",
    title: "Freelancer",
    rating: "4.7",
    linkedin: "https://linkedin.com/in/ahmed",
    quote:
      "Fast Wi-Fi, cozy desks, and great people. I feel focused every single day.",
  },
  {
    name: "Sarah M.",
    title: "Marketing CEO",
    rating: "5.0",
    linkedin: "https://linkedin.com/in/sarah",
    quote:
      "The best coworking environment I’ve experienced. Clean, inspiring, and completely stress-free.",
  },
];

function Testimonials() {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <section className="testimonials-section">
      <Slider {...settings} className="testimonials-slider">
        {testimonials.map((item, index) => (
          <div key={index}>
            <p className="testimonial-quote">“{item.quote}”</p>
            <div className="testimonial-footer">
              <span className="testimonial-name">{item.name}</span>
              <span className="testimonial-stars">
                {item.rating}{" "}
                <FaStar
                  style={{
                    color: "#FFD700",
                    fontSize: "14px",
                    marginLeft: "4px",
                  }}
                />
              </span>
              <a
                href={item.linkedin}
                target="_blank"
                rel="noreferrer"
                className="testimonial-linkedin"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Testimonials;
