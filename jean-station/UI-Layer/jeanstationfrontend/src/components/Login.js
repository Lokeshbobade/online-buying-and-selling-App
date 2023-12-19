import React, { useState } from 'react';
import './login.css'; // Import your custom CSS for styling
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login({ setIsAuthenticated, setUser }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:5000/login', formData);
      console.log(response.data); // Handle the response from the server
      if (response.status === 200) {
        setIsAuthenticated(true);
        setUser(formData)
        navigate('/home')
      }
    } catch (error) {
      console.error(error); // Handle any errors that occur
    }
  };

  return (
    <div className='background'>
      <div id="login-form-wrap">
        <img src={require('./assets/brand.jpg')} alt='logo' height={40} width={100} />
        <h2 id='header'>Admin-Login</h2>
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
            <input type="submit" id="login" value="Login" />
          </p>
        </form>
        <div id="create-account-wrap">
          <p className='inputss'>Not a member? <a className='anchor' href="/signup">Create Account</a></p>
        </div>
      </div>
    </div>
  )
};

export default Login;