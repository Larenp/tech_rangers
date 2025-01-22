import "./signup.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 


function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <motion.div
          className="signup-form"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="title">Create an account</h1>
          <form onSubmit={handleSubmit} className="form">
            {/* Email Input */}
            <motion.div
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </motion.div>

            {/* Password Input */}
            <motion.div
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </motion.div>

            {/* Confirm Password Input */}
            <motion.div
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
              />
            </motion.div>

            {/* Error Message */}
            {error && <p className="error-message">{error}</p>}

            {/* Checkbox */}
            <div className="terms-checkbox">
              <label>
                <input type="checkbox" />
                I accept the{' '}
                <Link to="/termsandconditions" className="link">Terms and Conditions</Link>
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Create an account
            </motion.button>
          </form>

          {/* Login Link */}
          <p className="login-link">
            Already have an account? <Link to="/login" className="link">Login here</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Signup;
