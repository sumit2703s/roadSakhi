import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // For navigation after login
//import styled from "styled-components";
import "../HomePage/HomePage.css"; // Add CSS for styling

 

const Login = ({setUser}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate(); 
  
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios.get(`http://localhost:8000/user/login`, {
        params: {
          email: email,
          password: password,
        },
      });

      // if user is present then redirect to the dashboard and stores username
      if (response.status === 200) {
        
        const userName=response.data.name;
        setUser(userName);
        
        alert("Login successful! Redirecting to dashboard...")
        setTimeout(() => {
          navigate('/dashboard'); 
        }, 500); // Delay 
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("User not found. Please register first.");

      } else {
        alert("Failed to login. Please try again.")
        
      }
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };
 
  return (
    <div className='wrapper'>
        <div className='content'>
        <h2 style={{ textAlign: 'center', marginTop: '30px' }}>Login</h2>
      <form style={{ textAlign: 'center', marginTop: '30px' }} onSubmit={handleSubmit}>
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <button style={{ textAlign: 'center', marginTop: '30px' }} type="submit">Login</button>
      </form>
      {/* message && <p>{message}</p> */}
      

        </div>
    </div>
  );
};

export default Login;
