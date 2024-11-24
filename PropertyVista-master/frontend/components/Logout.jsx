// In your React component (e.g., `HomePage.js`)
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();  // Hook to navigate to other pages

  const logoutHandler = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/accounts/logout/", {
        method: "POST",  // Use POST or GET depending on your Django setup
        credentials: "include",  // Ensures cookies (sessions) are sent with the request
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      const data = await response.json();
      console.log(data.message);  // Log the logout success message

      // Redirect to the homepage after successful logout
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={logoutHandler} disabled={loading}>
        {loading ? "Logging out..." : "Logout"}
      </button>
    </div>
  );
};

export default HomePage;
