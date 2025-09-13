import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Report.css'; // Import CSS for styling


const Reports = () => {
  const [reports, setReports] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get('http://localhost:8000/reports'); // Replace with your actual API endpoint
        setReports(response.data);
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    };

    fetchReports();
  }, []);

  const handleRedirect = () => {
    navigate('/dashboard'); // Redirect to dashboard when the button is clicked
  };

  const handleReportIssue = () => {
    navigate('/report');  
  };

  return ( 
    <>
      <div className="reports-container" >
      <h2>All Reports</h2>
      <div>
        {reports.length === 0 ? (
          <p>No reports available.</p>
        ) : (
          <ul>
            <div className="reports-list">
            {reports.map((report, index) => (
              <li key={index} style={{ marginBottom: '20px', listStyle: 'none', border: '1px solid #ccc', padding: '10px' }}>
                <h3>{report.name}</h3>
                <p><strong>Location:</strong> {report.location}</p>
                <p><strong>E-Location:</strong> {report.elocation}</p>
                <p><strong>Description:</strong> {report.description}</p>
              </li>
            ))}
            </div>
          </ul>
          
        )}
      </div>
      <div className="report-button-container">
        <button className="report-button" onClick={handleReportIssue}>Report New Issue</button>
      </div>
    </div>

      
    </>
  );
};

export default Reports;
