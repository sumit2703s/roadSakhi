import React, { useState } from "react";
import axios from "axios";
import { useNavigate , Link} from "react-router-dom";
import "./Register.css";
import loginImg from  '../../assets/signin-image.svg'

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  /*   const [message, setMessage] = useState(""); */

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the FastAPI backend
      const response = await axios.post("http://localhost:8000/user", {
        name: name,
        email: email,
        password: password,
      });

      if (response.status === 200) {
        alert("User registered successfully! Redirecting you to Login Page");
        setTimeout(() => {
          navigate("/login"); // Redirect to the login page
        }, 600); // 2-second delay
      }
    } catch (error) {
      alert("Failed to register user. Please Try Again.");
      console.error("Error:", error.response.data);
    }
  };

  return (
    <div className="wrapper">
       <div className='image-section'>
        <img src={loginImg} alt='Login' />
      </div>
      <div className="form-section">
      <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="input-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input-group"></div>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
         
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <p>
            Don’t have an account? <Link to='/login'>Sign In</Link>
          </p>
          <button type="submit">Register</button>
        </form>
      </div>
        
      </div>
   
  );
};

export default Register;
