import React, { useState } from 'react';
import axios from 'axios';
import './ReportIssue.css'; // Importing the same CSS file for styling

import { useNavigate } from 'react-router-dom';



const ReportIssue = () => {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        elocation:'',
        description: ''
    });

    const navigate=useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:8000/report', formData);
          if (response.status === 201) {
            alert('Report submitted successfully!');
            setFormData({ name: '', location: '', elocation: '', description: '' }); // Reset the form
            navigate('/dashboard');
          }
        } catch (error) {
          console.error('Error submitting report:', error.response ? error.response.data : error.message);
          alert('Failed to submit the report. Please try again.');
        }
      };


    return (
      <div className="report-issue-section">
      <form className="form" onSubmit={handleSubmit}>
          <h3>Report an Issue</h3>
          
          <label htmlFor="name">Full Name</label>
          <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Full Name"
              required
          />

          <label htmlFor="location">Location</label>
          <input
              type="text"
              name="location"
              id="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location of the Issue"
              required
          />

          <label htmlFor="elocation">Exact Location</label>
          <input
              type="text"
              name="elocation"
              id="elocation"
              value={formData.elocation}
              onChange={handleChange}
              placeholder="Exact Location"
              required
          />

          <label htmlFor="description">Issue Description</label>
          <textarea
              name="issueDescription"
              id="issueDescription"
              rows="5"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the issue here"
              required
          ></textarea>

          <button type="submit">Submit</button>
      </form>
  </div>
  );
};

export default ReportIssue;
