import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Auth from '../src/Register';
import Authen from'./Authen'
import '../components/Navbar.css';
import'../components/Auth.css'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [activeForm, setActiveForm] = useState('login'); // Toggle between login/register form
  const [isLogin,setIsLogin] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleFormSwitch = (form) => {
    setActiveForm(form);
  };
  const handleLogout = () => {
    // Clear login state and redirect to home
    localStorage.removeItem("isAuthenticated"); // Clear login state (could also be a backend logout request)
    setIsLogin(false); // Set isLogin state to false
    console.log("succesfully logged out")

  };
  
  return (
    <nav className="navbar">
      <div className="logo">Real Estate</div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        {/* <li><a href="#home" className="nav-item">Home</a></li> */}
        <Link to={`/`} className="nav-item">Home</Link>
        {/* <li><a href="#properties" className="nav-item">Properties</a></li> */}
        <Link to={`/properties`} className="nav-item">Properties</Link>
        {/* <li><a href="#about" className="nav-item">About</a></li> */}
        <Link to={`/about`} className="nav-item">About</Link>
        {/* <li><a href="#contact" className="nav-item"> Projects Gallery</a></li> */}
        <Link to={`/projectsGallery`} className="nav-item">Projects Gallery</Link>
        {!isLogin ? (
          <li><button className="nav-item login-btn" onClick={togglePopup}>Login / Register</button></li>
        ) : (
          <h4>
            Logged in / <button onClick={handleLogout} className="nav-item logout-btn">Logout</button>
          </h4>
        )}
      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Popup for Login/Register */}
      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-btn" onClick={togglePopup}>X</button>
            <Authen />
          
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;