// ------------------------------------------------------------
// © 2025 Ahmad Raza  (@ahmadrzaa on GitHub)
// All rights reserved. Do not distribute without permission.
// ------------------------------------------------------------






import React, { useState, useEffect } from "react";
import "./UserProfile.css";

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const current = JSON.parse(localStorage.getItem("currentUser"));
    if (current) setUser(current);
  }, []);

  if (!user) {
    return (
      <div className="profile-page">
        <h2>User not logged in.</h2>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-box">
        <h2>Welcome, {user.name}</h2>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Role:</strong> {user.role}
        </p>
      </div>
    </div>
  );
}

export default UserProfile;
