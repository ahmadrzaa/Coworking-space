// ------------------------------------------------------------
// © 2025 Ahmad Raza  (@ahmadrzaa on GitHub)
// All rights reserved. Do not distribute without permission.
// ------------------------------------------------------------




import React, { useState } from "react";
import "./Contact.css";
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [submittedData, setSubmittedData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const data = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      company: form.company.value,
      job: form.job.value,
      email: form.email.value,
      phone: form.phone.value,
      orgType: form.orgType.value,
      desk: form.desk.value,
      message: form.message.value,
    };

    setSubmittedData(data);
    setShowPopup(true);
    form.reset();

    setTimeout(() => setShowPopup(false), 7000);
  };

  const closePopup = () => setShowPopup(false);

  return (
    <>
      {showPopup && submittedData && (
        <div className="top-popup-box">
          <div className="top-popup-inner">
            <button className="popup-close-btn" onClick={closePopup}>
              Close
            </button>
            <h4>
              <span className="popup-icon"></span> Thank You from Platform Bahrain
            </h4>
            <p>
              Hello <strong>{submittedData.firstName}</strong>, your interest in{" "}
              <strong>{submittedData.desk}</strong> has been received.
              <br />
              We'll contact you via <strong>{submittedData.email}</strong>.
            </p>
            <div className="popup-links">
              <a
                href="https://wa.me/97334123546"
                className="popup-whatsapp"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-whatsapp"></i> +973 34123546
              </a>
              <a
                href="mailto:ahmadrza.1110@gmail.com"
                className="popup-email"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-envelope"></i> Email Us
              </a>
            </div>
            <div className="popup-urgent">
              <p>
                <strong>Need urgent support for a project, coworking space, or website?</strong>
              </p>
              <p>
                <strong>WhatsApp:</strong>{" "}
                <a href="https://wa.me/97334123546" target="_blank" rel="noreferrer">
                  +973 34123546
                </a>
                <br />
                <strong>Email:</strong>{" "}
                <a href="mailto:ahmadrza.1110@gmail.com">ahmadrza.1110@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      )}

      <section className="contact-wrap" id="contact">
        <div className="contact-grid">
          <div className="contact-left">
            <h2 className="contact-title">
              Contact <span>Us</span>
            </h2>
            <p className="contact-desc">
              Stay connected and empowered with our range of services designed to enhance your
              experience.
            </p>
            <iframe
              title="Map"
              className="contact-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5609438822466!2d50.58566361500616!3d26.228516683413753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49a60b0b3d72a5%3A0xb1fd1b9cc1ce9f1!2sManama%2C%20Bahrain!5e0!3m2!1sen!2sbh!4v1683901952566!5m2!1sen!2sbh"
              loading="lazy"
            ></iframe>

            <div className="contact-address">
              <p>
                <FaMapMarkerAlt /> Platform Bahrain
              </p>
              <p>Building 47, Road 2803, Seef District, Manama</p>
              <p>Kingdom of Bahrain</p>
              <p>
                <FaEnvelope className="icon" />
                <a className="contact-link" href="mailto:ahmadrza.1110@gmail.com">
                  ahmadrza.1110@gmail.com
                </a>
              </p>
              <p>
                <FaWhatsapp className="icon green" />
                <a
                  className="contact-link"
                  href="https://wa.me/97334123546"
                  target="_blank"
                  rel="noreferrer"
                >
                  +973 34123546 ( Call & Chat )
                </a>
              </p>
            </div>
          </div>

          <div className="contact-right">
            <h3 className="form-title">Start Your Journey!</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input name="firstName" placeholder="First Name*" required />
                <input name="lastName" placeholder="Last Name*" required />
              </div>
              <div className="form-row">
                <input name="company" placeholder="Company Name*" required />
                <input name="job" placeholder="Job Title*" required />
              </div>
              <div className="form-row">
                <select name="orgType" required>
                  <option value="">Organization Type*</option>
                  <option value="Startup">Startup</option>
                  <option value="Freelancer">Freelancer</option>
                  <option value="Enterprise">Enterprise</option>
                </select>
                <input name="email" placeholder="Email*" required />
              </div>
              <div className="form-row">
                <select name="desk" required>
                  <option value="">Desk Type</option>
                  <option value="Private Office">Private Office</option>
                  <option value="Dedicated Desk">Dedicated Desk</option>
                  <option value="Hot Desk">Hot Desk</option>
                </select>
                <input name="phone" placeholder="Phone Number" required />
              </div>
              <div className="form-row single">
                <textarea name="message" placeholder="Your message / request" />
              </div>
              <div className="form-footer">
                <label>
                  <input type="checkbox" /> Ready to provide more details
                </label>
                <p className="form-note">
                  Platform Bahrain needs your contact info to reach you. Read our{" "}
                  <a href="#">Privacy Policy</a>.
                </p>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
