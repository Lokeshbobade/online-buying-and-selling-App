import React, { useState } from 'react';
import './styles/Signup.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; // Use useHistory instead of useNavigate

const Signup = () => {
    const history = useHistory(); // Use useHistory here

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

            if (response.status === 201) {
                // Redirect to the login page
                //history.push('/'); // Use history.push to navigate
                window.location.href='/login';
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='background'>
            <div id="login-form-wrap">
                <h2 id='signupheader'>User Sign Up</h2>
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
                        <input type="email"
                            id="email"
                            name="email"
                            placeholder="Email Address"
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
                        <input type="submit" id="login" value="Sign up" />
                    </p>
                </form>
                <div id="create-account-wrap">
                    <p className='inputss'>Already a user? <a className='anchor' href="/">Login</a></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;