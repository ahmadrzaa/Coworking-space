// ------------------------------------------------------------
// © 2025 Ahmad Raza  (@ahmadrzaa on GitHub)
// All rights reserved. Do not distribute without permission.
// ------------------------------------------------------------




import React from "react";
import "./Features.css";

const features = [
  {
    image: "https://img.icons8.com/ios-filled/100/ffffff/office.png",
    title: "Private Office",
    desc: "Monthly & yearly options",
    price: "Starting BHD 100"
  },
  {
    image: "https://img.icons8.com/ios-filled/100/ffffff/desk.png",
    title: "Dedicated Desk",
    desc: "Ergonomic seating",
    price: "BHD 50/month"
  },
  {
    image: "https://img.icons8.com/ios-filled/100/ffffff/conference-call.png",
    title: "Meeting Rooms",
    desc: "Book hourly or daily",
    price: "From BHD 10/hr"
  },
  {
    image: "https://img.icons8.com/ios-filled/100/ffffff/wifi.png",
    title: "High-Speed Wi-Fi",
    desc: "Unlimited secure connection",
    price: "Free"
  },
  {
    image: "https://img.icons8.com/ios-filled/100/ffffff/parking.png",
    title: "Parking Access",
    desc: "Covered + outdoor",
    price: "Included (Yearly)"
  },
  {
    image: "https://img.icons8.com/ios-filled/100/ffffff/coffee-to-go.png",
    title: "Free Coffee & Water",
    desc: "Coffee & Mineral Water",
    price: "Free"
  }
];

function Features() {
  return (
    <section className="features">
      <div className="features__wrapper">
        <h2 className="features__title">What We Provide</h2>
        <div className="features__grid">
          {features.map((item, index) => (
            <div className="feature__box" key={index}>
              <img
                src={item.image}
                alt={item.title}
                className="feature__icon-img"
              />
              <div className="feature__content">
                <h3 className="feature__title">{item.title}</h3>
                <p className="feature__desc">{item.desc}</p>
                <p className="feature__price">{item.price}</p>
                <a href="#contact" className="feature__btn">
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
