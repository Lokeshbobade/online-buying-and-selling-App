import React, { useState } from 'react';
import './styles/Login.css'; // Import your custom CSS for styling
import axios from 'axios';
import { useHistory } from 'react-router-dom'; // Use useHistory instead of useNavigate

function Login() {
    const history = useHistory(); // Use useHistory here
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
                history.push('/home'); // Use history.push to navigate
            }
        } catch (error) {
            console.error(error); // Handle any errors that occur
        }
    };

    return (
        <div className='background'>
            <div id="login-form-wrap">
                <h2 id='header'>User Login</h2>
                <form onSubmit={handleSubmit} id="login-form">
                    <p className='inputss'>
                        <input type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleInputChange}
                            required /><i className="validation"><span></span><span></span></i>
                    </p>
                    <p className='inputss'>
                        <input type="text"
                            id="email"
                            name="email"
                            placeholder="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required /><i className="validation"><span></span><span></span></i>
                    </p>
                    <p className='inputss'>
                        <input type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required /><i className="validation"><span></span><span></span></i>
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
    );
}

export default Login;