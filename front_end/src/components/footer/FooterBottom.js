import React from "react";
import { Link } from "react-router-dom";
import instaIcon from "../../assets/insta.svg";
import twitterIcon from "../../assets/twitter.svg";

function FooterBottom() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Links Section */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/report-issue">Report Issue</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            
          </ul>
        </div>

        {/* Privacy & Terms Section */}
        <div className="footer-section">
          <h4>Legal</h4>
          <ul className="footer-links">
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-conditions">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="footer-section follow-us">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instaIcon} alt="Instagram icon" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitterIcon} alt="Twitter icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© 2024 FixMyRoad. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default FooterBottom;
