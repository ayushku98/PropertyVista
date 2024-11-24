
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';  // Import toast
import 'react-toastify/dist/ReactToastify.css';
import "../components/Auth.css" // Import styles
  // Import the CSS file
  import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and register
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/accounts/register/', {
        username,
        password,
        email,
      });
      console.log('Registration successful:', response.data);
      toast.success('Registration successful!');  // Show success notification
      setIsLogin(true);
      // Switch to login after successful registration
    } catch (error) {
      console.error('Error during registration:', error.response?.data || error.message);
      toast.error('Registration failed!');  // Show error notification
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log("vis")
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/accounts/login/', {
        username,
        password,
      });
      console.log('Login successful:', response.data);
      localStorage.setItem('access', response.data.access); // Store token in localStorage
      toast.success('Login successful!');
      navigate("/profile");  // Show success notification
    } catch (error) {
      console.error('Error during login:', error.response?.data || error.message);
      toast.error('Login failed!');  // Show error notification
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-heading">{isLogin ? 'Login' : 'Register'}</h2>
      <form className="auth-form" onSubmit={isLogin ? handleLogin : handleRegister}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        {!isLogin && (
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        )}
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      <div className="auth-toggle">
        <button onClick={() => setIsLogin(!isLogin)}>
         {isLogin ? 'Switch to Register' : 'Switch to Login'}
          
        </button>
      </div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeButton={false} /> {/* ToastContainer for notifications */}
    </div>
  );
};

export default Auth;

