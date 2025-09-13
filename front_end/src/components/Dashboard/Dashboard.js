
import React from "react";
import { Link, Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Celebration from "../../assets/celebration.svg";
import Profile from "../Profile/Profile";
import Feedbacks from "../Feedback/Feedback";
import Reports from "../Reports/Reports";
import "./Dashboard.css";

const Dashboard = ({ userName }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route location

  const handleFeedback = () => {
    navigate("/feedform");
  };

  const handleReport = () => {
    navigate("/report");
  };

  // Check if we're on the root dashboard page to conditionally render content
  const isDashboardRoot = location.pathname === "/dashboard";

  if (!userName) {
    alert("Login required!");
    navigate("/login");
    return null;
  }

  return (
    <>
      <div className="dashboard">
        {/* Sidebar Navigation */}
        <nav className="dashboard-nav">
          <h2>{userName}'s Dashboard</h2>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/dashboard/profile">Your Profile</Link>
            </li>
            <li>
              <Link to="/dashboard/feedbacks">Your Feedbacks</Link>
            </li>
            <li>
              <Link to="/dashboard/reports">Your Reports</Link>
            </li>
          </ul>
        </nav>

        {/* Conditionally Render Dashboard Content only on Root */}
        {isDashboardRoot && (
          <div className="dashboard-container">
            <div className="dashboard-header">
              <h1>
                Welcome back, <span>{userName}</span>
                <img src={Celebration} alt="celebration-img" />
              </h1>
            </div>
            <p>
            As a responsible citizen, it’s important to take proactive steps to
            ensure the well-being and safety of our communities. By
            participating actively, you help to create a cleaner, safer, and
            more organized environment for everyone. Below are a few key
            responsibilities of a responsible citizen:
          </p>

          <ul className="responsibilities-list">
            <li>
              <strong>Report Issues:</strong> Actively report any damages or
              hazards like potholes, broken streetlights, or other road-related
              issues to prevent accidents.
            </li>
            <li>
              <strong>Provide Feedback:</strong> Share feedback on public
              services or infrastructure to help local authorities improve and
              maintain the community better.
            </li>
            <li>
              <strong>Follow Rules:</strong> Adhere to traffic laws and respect
              public property to maintain order and reduce potential harm to
              others.
            </li>
            <li>
              <strong>Raise Awareness:</strong> Encourage others to take part in
              community-driven initiatives, and spread awareness about safety
              and cleanliness in your locality.
            </li>
            <li>
              <strong>Volunteer:</strong> Participate in community clean-ups and
              engage in efforts to beautify and maintain public spaces.
            </li>
          </ul>

            <div className="button-group">
              <button className="dashboard-button" onClick={handleFeedback}>
                Make a Feedback
              </button>
              <button className="dashboard-button" onClick={handleReport}>
                Make a Report
              </button>
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <div className="dashboard-content">
          <Routes>
            <Route path="profile" element={<Profile />} />
            <Route path="feedbacks" element={<Feedbacks />} />
            <Route path="reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

