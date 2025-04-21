# Platform Bahrain – Smart Coworking Space Portal

**Fullstack project** built using **Vite + React** frontend and **Node.js + Express** backend for coworking space management, smart workspace listing, booking inquiries, and user login/signup functionality. Fully responsive and hosted via GitHub Pages (frontend) + Node.js server (backend).

![homepage ss1](https://github.com/user-attachments/assets/080b945a-0a20-49a2-848f-f906822c6c4d)

---

## 🌐 Live Demo

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



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
