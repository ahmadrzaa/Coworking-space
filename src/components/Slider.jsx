// ------------------------------------------------------------
// © 2025 Ahmad Raza  (@ahmadrzaa on GitHub)
// All rights reserved. Do not distribute without permission.
// ------------------------------------------------------------



import React from "react";
import Slider from "react-slick";
import "./Slider.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/platfrom5.webp",
  "/platfrom1.webp",
  "/platfrom3.webp",
  "/platfrom2.webp",
  "/platfrom4.webp",
];

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="slider-section">
      <h2 className="slider-heading">Our Spaces</h2>
      <Slider {...settings} className="slider-container">
        {images.map((src, i) => (
          <div key={i} className="slider-image-box">
            <img src={src} alt={`Slide ${i}`} />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default ImageSlider;
