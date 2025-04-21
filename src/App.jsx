// ------------------------------------------------------------
// © 2025 Ahmad Raza  (@ahmadrzaa on GitHub)
// All rights reserved. Do not distribute without permission.
// ------------------------------------------------------------




import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import Features from "./components/Features";
import Slider from "./components/Slider";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserProfile from "./components/UserProfile";
import Admin from "./components/Admin";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* ?? If user visits "/", go to login by default */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* ?? Login & Signup */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* ??? Protected Routes */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <>
                <Hero />
                <SectionTwo />
                <SectionThree />
                <Features />
                <Slider />
                <Testimonials />
                <Contact />
                <Footer />
              </>
            </PrivateRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <>
                <UserProfile />
                <Footer />
              </>
            </PrivateRoute>
          }
        />

        <Route path="/admin" element={<Admin />} />

        {/* ?? 404 fallback */}
        <Route
          path="*"
          element={
            <div style={{ padding: "100px", color: "#fff" }}>
              <h2>404 - Page Not Found</h2>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
