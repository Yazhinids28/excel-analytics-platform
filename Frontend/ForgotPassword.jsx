import React, { useState } from "react";
import "../styles/ForgotPassword.css"; // You can reuse Register.css or make small changes
import oceanImage from '../assets/forgotPass.png';

import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
    const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle forgot password logic here
    console.log("Password reset ", email);
    navigate('/reset-password');
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-left">
          <h2 className="register-title">Forgot Password</h2>
          <p className="register-subtitle">
            Enter your email address below and we'll send you a link to reset your password.
          </p>
          <form className="register-form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="register-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="register-button" >
             Continue
            </button>
          </form>
          <p className="login-text">
            Remembered your password? <a href="/login">Login</a>
          </p>
        </div>

        <div className="register-right">
          <img src={oceanImage} alt="Wellness" />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
