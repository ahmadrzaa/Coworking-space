// ------------------------------------------------------------
// © 2025 Ahmad Raza  (@ahmadrzaa on GitHub)
// All rights reserved. Do not distribute without permission.
// ------------------------------------------------------------



import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("authUser"));
  return user ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
