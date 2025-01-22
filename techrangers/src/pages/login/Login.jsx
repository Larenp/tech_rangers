import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { motion } from "framer-motion";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // Handle form submission with validation and loading indicator
  const handleClick = async (e) => {
    e.preventDefault();

    // Simple form validation
    if (!credentials.username || !credentials.password) {
      alert("Both fields are required.");
      return;
    }

    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login-container">
      <motion.div
        className="form-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="form-title">Sign In</h2>
        <form onSubmit={handleClick} className="form">
          <div className="form-group">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              id="username"
              className="form-input"
              placeholder="Enter your username"
              value={credentials.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-actions">
            <div className="remember-me">
              <input
                type="checkbox"
                id="remember"
                className="remember-me-checkbox"
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="/forgot-password" className="forgot-password">Forgot password?</a>
          </div>
          <motion.button
            type="submit"
            className="submit-button"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? (
              <div className="spinner"></div>
            ) : (
              "Sign In"
            )}
          </motion.button>
          {error && <span className="error-message">{error.message}</span>}
        </form>
        <p className="signup-link">
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
      </motion.div>

      {/* Background shapes */}
      <div className="background-shapes">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default Login;
