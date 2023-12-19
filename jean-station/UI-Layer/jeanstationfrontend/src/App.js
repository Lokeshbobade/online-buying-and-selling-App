import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import AdminProducts from './components/admin_products';
import Home from './components/Home';
import Products from './components/Products'
import WomenProducts from './components/WomenProducts';
import UserProfile from './components/Profie';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import PageNotFound from './components/PageNotFound';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  
  const handleLogout = () => {
    setIsAuthenticated(false);
    window.location.href ='/'
  };

  return (
    <Router>
      <div className="App">
      {isAuthenticated && ( 
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-secondary">
          <div className="container">
            <Link className="navbar-brand navbar-brand-name">JeanStation</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav links">
                <li className="nav-item">
                  <Link className="nav-link" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">Men</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/productsW">Women</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add-product">Insert</Link>
                </li>
              </ul>
              <ul className="navbar-nav icons">
                <li className="nav-item">
                  <Link className="nav-link" to="/contact"><i className="fa fa-phone user-nav"></i></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/notifications"><i className="fa fa-bell user-nav"></i></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile" ><i className="fa fa-user user-nav"></i></Link>
                </li>
                <li className="nav-item">
                <button className="btn btn-info btn-sm mt-1"onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
          
        </nav>
      )}
        <Routes>
        <Route exact path="/" element={<Login setIsAuthenticated={setIsAuthenticated} setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
            {isAuthenticated && (
              <>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productsW" element={<WomenProducts />} />
          <Route path="/add-product" element={<AdminProducts />} />
          <Route path="/profile" element={<UserProfile  user={user} />} />
          <Route path="/contact" element={<Contact />} />
          </>
            )}
            <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  )
}
export default App;
