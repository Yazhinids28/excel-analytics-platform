import React, { useState } from "react";
import "../styles/ResetPassword.css"; // Import the CSS file
import resetImage from '../assets/reset.png'; // You can use your own image here
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
   const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Handle password reset logic here
    console.log("Password reset successfully", formData);
    navigate('/login');
  };

  return (
    <div className="reset-container">
      <div className="reset-card">
        <div className="reset-left">
          <h2 className="reset-title">Reset Your Password</h2>
          <p className="reset-subtitle">
            Enter your new password below to reset your account password.
          </p>
          <form className="reset-form" onSubmit={handleSubmit}>
            <input
              type="password"
              className="reset-input"
              placeholder="New Password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              className="reset-input"
              placeholder="Confirm New Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button type="submit" className="reset-button">
              Reset Password
            </button>
          </form>
          <p className="login-text">
            Remembered your password? <a href="/login">Login</a>
          </p>
        </div>

        <div className="reset-right">
          <img src={resetImage} alt="Reset Password" />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
