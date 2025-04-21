// ------------------------------------------------------------
// © 2025 Ahmad Raza  (@ahmadrzaa on GitHub)
// All rights reserved. Do not distribute without permission.
// ------------------------------------------------------------



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../auth";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const matchedUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (matchedUser) {
    
      login(matchedUser);

      if (matchedUser.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/home");
      }
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        <p>
          Don’t have an account? <a href="/signup">Create one</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
