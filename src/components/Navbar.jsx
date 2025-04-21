// ------------------------------------------------------------
// © 2025 Ahmad Raza  (@ahmadrzaa on GitHub)
// All rights reserved. Do not distribute without permission.
// ------------------------------------------------------------




import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authUser = JSON.parse(localStorage.getItem("authUser"));
    setUser(authUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authUser");
    navigate("/login");
  };

  return (
    <header className="navbar">
      <div className="navbar__container">
      <img
        src="Platform Business logo PDF1-01-01.png"
        alt="Platform Bahrain"
        className="navbar__logo"
      />


        <nav className="navbar__nav">
          <a href="#" className="active">Home</a>

          <div className="dropdown">
            <a href="#">Workspaces ▾</a>
            <div className="dropdown__content">
              <a href="#">Private Offices</a>
              <a href="#">Coworking Desks</a>
              <a href="#">Meeting Rooms</a>
            </div>
          </div>

          <a href="#">Membership</a>
          <a href="#">Booking</a>
          <a href="#">Events</a>

          <div className="dropdown">
            <a href="#">Support ▾</a>
            <div className="dropdown__content">
              <a href="#">Business Services</a>
              <a href="#">Startup Support</a>
              <a href="#">FAQ</a>
            </div>
          </div>

          <div className="dropdown">
            <a href="#">Platform Bahrain ▾</a>
            <div className="dropdown__content">
              <a href="#">About Us</a>
              <a href="#">Our Team</a>
              <a href="#">Partners</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </nav>

      
        <div className="navbar__user">
          {user ? (
            <>
              <img
                src={user.profileImg || "https://img.icons8.com/ios-filled/50/user.png"}
                alt="User"
                className="navbar__user-img"
                onClick={() => setShowDropdown(!showDropdown)}
              />
              {showDropdown && (
                <div className="navbar__dropdown">
                  <p><strong>{user.name}</strong></p>
                  <p>{user.email}</p>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </>
          ) : (
            <a href="/login" className="navbar__icon">
              <i className="fas fa-user"></i>
            </a>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
