// ------------------------------------------------------------
// © 2025 Ahmad Raza  (@ahmadrzaa on GitHub)
// All rights reserved. Do not distribute without permission.
// ------------------------------------------------------------




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find((u) => u.email === form.email);
    if (exists) {
      setError("Email already registered");
      return;
    }

    const isFirstUser = users.length === 0;
    const newUser = { ...form, role: isFirstUser ? "admin" : "user" };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    
    navigate("/login");
  };

  return (
    <div className="signup-page">
      <form className="signup-form" onSubmit={handleSignup}>
        <h2>Create Account</h2>

        {error && <p className="error">{error}</p>}

        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Create Account</button>

        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
}

export default Signup;
