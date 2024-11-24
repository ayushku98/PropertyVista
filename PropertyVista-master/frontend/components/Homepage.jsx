import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/Homepage.css';

export default function Homepage() {
  const navigate = useNavigate();  // Hook to get the navigate function

  const handleNavigation = () => {
    navigate("/exploreproperties"); // Use navigate function to move to the target route
  }

  return (
    <div className='container'>
      <div className="banner">
        <div className="overlay">
          <h1>Find Your Dream Home Here</h1>
          <button className="cta" onClick={handleNavigation}>
            <span>See Properties</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
