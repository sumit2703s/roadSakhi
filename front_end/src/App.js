import "./App.css";
import { useState } from "react";
import React from "react";
import NavBar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";


import UserDashboard from "./components/Dashboard/UserDash";
import ReportIssue from "./components/Reports/ReportIssue";
import FeedbackForm from "./components/Feedback/FeedbackForm";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Feedbacks from "./components/Feedback/Feedback";
import Reports from "./components/Reports/Reports";
import HomePage from "./components/HomePage/HomePage";
import Dashboard from "./components/Dashboard/Dashboard";
import FooterBottom from "./components/footer/FooterBottom";
import Contact from "./components/contact/Contact";
import Vision from "./components/Vision&Mission/Vision";

function App() {
  const [userName, setUserName] = useState("");

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />

        <Route path="/feedform" element={<FeedbackForm />} />
        <Route path="/report" element={<ReportIssue />} />

        <Route path="/vision" element={<Vision />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login setUser={setUserName} />} />

        <Route path="/dashboard" element={<Dashboard userName={userName} />}>
          <Route path="/dashboardInfo" element={<UserDashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="feedbacks" element={<Feedbacks />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
      <FooterBottom />
    </>
  );
}

export default App;
