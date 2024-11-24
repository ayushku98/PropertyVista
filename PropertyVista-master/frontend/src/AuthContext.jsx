import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("access"));

  useEffect(() => {
    if (token) {
      const decodedToken = jwt_decode(token);

      // Check if the token is expired
      if (decodedToken.exp * 1000 < Date.now()) {
        logout();
      } else {
        setUser(decodedToken);
      }
    }
  }, [token]);

  const login = async (username, password) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/accounts/login/", {
        username,
        password,
      });
      const { access } = response.data;
      localStorage.setItem("access", access);
      setToken(access);
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Login failed. Please check your username and password.");
    }
  };

  const logout = () => {
    localStorage.removeItem("access");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
