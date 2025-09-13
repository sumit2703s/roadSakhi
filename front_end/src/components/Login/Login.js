import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import loginImg from '../../assets/signin-image.svg';
import lottie from 'lottie-web'; 
import './Login.css'


const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const lottieContainer = useRef(null); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8000/user/login`, {
        params: {
          email: email,
          password: password,
        },
      });

      if (response.status === 200) {
        const userName = response.data.name;
        setUser(userName);
        alert('Login successful! Redirecting to dashboard...');
        setTimeout(() => {
          navigate('/dashboard');
        }, 500);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert('User not found. Please register first.');
      } else {
        alert('Failed to login. Please try again.');
      }
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: lottieContainer.current, // Reference to the Lottie container
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://lottie.host/86aa76d6-efab-4fe6-9754-abedfac5d87d/0V4d5eXDVP.json', // Your Lottie JSON URL
    });

    return () => animation.destroy(); // Clean up the animation on unmount
  }, []);



  return (
    <div className='login-wrapper'>
      <div className='image-section'>
        <img src={loginImg} alt='Login' />
      </div>
      <div className='form-section'>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className='input-group'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className='input-group'>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <p>
            Don’t have an account? <Link to='/register'>Sign Up</Link>
          </p>
          <button type='submit'>Login</button>
        </form>
      </div>

      {/* Lottie Animation */}
      <div className="lottie-animation" ref={lottieContainer}></div>

    </div>
  );
};

export default Login;
