// src/auth.js

// ------------------------------------------------------------
// © 2025 Ahmad Raza  (@ahmadrzaa on GitHub)
// All rights reserved. Do not distribute without permission.
// ------------------------------------------------------------


export const login = (user) => {
    localStorage.setItem("authUser", JSON.stringify(user));
  };
  
  export const logout = () => {
    localStorage.removeItem("authUser");
  };
  
  export const isLoggedIn = () => {
    return !!localStorage.getItem("authUser");
  };
  
  export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("authUser"));
  };
  
