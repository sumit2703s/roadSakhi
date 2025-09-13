import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './feedback.css'; // Import the CSS file for styling


const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/feedbacks');  
        setFeedbacks(response.data);  // Store feedbacks in state
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
      }
    };

    fetchFeedbacks();
  }, []); 

  const navigate = useNavigate(); 
  
  const handleReportIssue = () => {
    navigate('/feedform'); 
  };



  return (
    <>
    <div className="feedbacks-container">
      <h2>Your Feedbacks</h2>
      <div className="feedback-list">
        {feedbacks.length === 0 ? (
          <p>No feedbacks available.</p>
        ) : (
          <ul>
            {feedbacks.map((feedback, index) => (
              <li key={index}  className="feedback-item">
                <h3>{feedback.name}</h3>
                <p><strong>Email:</strong> {feedback.email}</p>
                <p><strong>Phone No:</strong> {feedback.phoneno}</p>
                <p><strong>Location:</strong> {feedback.location}</p>
                <p><strong>Description:</strong> {feedback.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="button-container">
        <button className="report-button" onClick={handleReportIssue}>
          Give feedback
        </button>
      </div>

    </div>
    </>
  );
};

export default Feedbacks;
 