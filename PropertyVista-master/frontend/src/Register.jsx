import React, { useState } from "react";
import axios from "axios";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(""); 
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and register

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/accounts/register/", {
        username,
        password,
        email,
      });
      console.log("Registration successful:", response.data);
      alert("Registration successful!");
      setIsLogin(true); // Switch to login after successful registration
    } catch (error) {
      console.error("Error during registration:", error.response?.data || error.message);
      alert("Registration failed!");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/accounts/login/", {
        username,
        password,
      });
      console.log("Login successful:", response.data);
      localStorage.setItem("access", response.data.access); // Store token in localStorage
      alert("Login successful!");
    } catch (error) {
      console.error("Error during login:", error.response?.data || error.message);
      alert("Login failed!");
    }
  };

  return (
    <div>
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <form onSubmit={isLogin ? handleLogin : handleRegister}>
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
        <button type="submit">{isLogin ? "Login" : "Register"}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Switch to Register" : "Switch to Login"}
      </button>
    </div>
  );
};

export default Auth;
