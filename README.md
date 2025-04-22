# Platform Bahrain – Smart Coworking Space Portal

## 🌐 Live Demo for DESKTOP SIZE NOT MOBILE 
[https://ahmadrzaa.github.io/Coworking-space/login ](https://ahmadrzaa.github.io/Coworking-space/)

**Fullstack project** built using **Vite + React** frontend and **Node.js + Express** backend for coworking space management, smart workspace listing, booking inquiries, and user login/signup functionality. 
![plaftom](https://github.com/user-attachments/assets/dab5b8d0-3fe9-4ada-9a8d-c4154135915f)

![plaftom 1](https://github.com/user-attachments/assets/0482efa0-5263-4e1e-93c9-d1e3c00ca5d7)

---

Frontend: https://yourusername.github.io/platform-bahrain  
Backend: Runs locally via Node server at http://localhost:5000/api/contact

---

## 🛠️ Technology Stack

- Frontend: Vite + React
- Backend: Node.js + Express
- Auth: localStorage (no DB yet)
- UI: Custom CSS
- Sliders: react-slick
- Form Submission: Express POST endpoint
- Deployment: GitHub Pages + Node server

---

## 📁 Project Directory Structure

platform-bahrain/  
├── public/  
│   └── Platform Business logo PDF1-01-01.png  
├── src/  
│   ├── components/  
│   │   ├── Hero, Navbar, Footer, SectionTwo, SectionThree  
│   │   ├── Features, Testimonials, Slider  
│   │   ├── Login.jsx / Signup.jsx / Admin.jsx / UserProfile.jsx / Contact.jsx  
│   ├── App.jsx / main.jsx / auth.js  
├── server/ (Node.js backend)  
│   └── index.js (Express app for form handling)  
├── package.json  
├── README.md  
└── index.html  

---

## ✅ Local Setup Instructions

### 1. Clone the repo

`git clone https://github.com/ahmadrzaa/platform-bahrain.git`  
`cd platform-bahrain`

### 2. Install frontend

`npm install`  
`npm run dev`

### 3. Run backend (for form submissions)

`cd server`  
`npm install`  
`node index.js`

Your form will submit to: `http://localhost:5000/api/contact`

---

## ✉️ Backend Code for Contact Form (`server/index.js`)

```js
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/contact", (req, res) => {
  console.log("Form data received:", req.body);
  res.json({ success: true, message: "Form received" });
});

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});

// © 2025 Ahmad Raza (@ahmadrzaa)
// Do not copy, reuse, or modify without permission.
// See LICENSE.md for full license terms.
