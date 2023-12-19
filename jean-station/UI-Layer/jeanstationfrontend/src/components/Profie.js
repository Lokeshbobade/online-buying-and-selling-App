import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component_Style.css'
import Footer from './Footer';

const UserProfile = ({user}) => {
  const [default_user] = useState({
    mobile: '123-456-7890',
    address: 'Bangalore, E-City, India',
  });


  return (
    <div style={{height:255}}>
      <div className="container mt-4 user-profile">
        <div className="row">
          <div className="col-md-4">
            <img src={require('./assets/user.jpg')} alt="user" height={150} width={150} className="img-fluid rounded-circle" />
          </div>
          <div className="col-md-8">
            <h2 style={{ color: '#333' }}>{user.username}</h2>
            <ul className="list-unstyled">
              <li>
                <strong>Email:</strong> {user.email}
              </li>
              <li>
                <strong>Mobile:</strong> {default_user.mobile}
              </li>
              <li>
                <strong>Address:</strong> {default_user.address}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer>
          <Footer />
        </Footer>
    </div>
  );
};

export default UserProfile;
