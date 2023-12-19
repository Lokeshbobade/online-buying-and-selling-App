import React, { useState } from 'react';
import './signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();  // Get the navigate function
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:5000/register', formData);
      console.log(response.data);

      if (response.status === 201) { // Change status code to 200, or check for success in your API response
        // Redirect to the login page
        navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='signup_background'>
      <div id="login-form-wrap">
        <h2 id='signupheader'>Sign Up</h2>
        <form onSubmit={handleSubmit} id="login-form">
          <p className='inputss'>
            <input type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              required /><i class="validation"><span></span><span></span></i>
          </p>
          <p className='inputss'>
            <input type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              required /><i class="validation"><span></span><span></span></i>
          </p>
          <p className='inputss'>
            <input type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required /><i class="validation"><span></span><span></span></i>
          </p>
          <p className='inputss'>
            <input type="submit" id="login" value="Sign up" />
          </p>
        </form>
        <div id="create-account-wrap">
          <p className='inputss'>Already User? <a className='anchor' href="/">Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;