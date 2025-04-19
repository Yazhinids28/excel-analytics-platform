import React, { useState } from "react";
import "../styles/Register.css"; // Import the CSS file for styling
import oceanImage from '../assets/icon.png'; 

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    age: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted", formData);
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-left">
          <h2 className="register-title">Create Account</h2>
          <p className="register-subtitle">
            Please fill in the details below to create your account.
          </p>
          <form className="register-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="register-input"
              placeholder="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              className="register-input"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              className="register-input"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <div className="register-options">
              <label>
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                />
                I agree to the Terms & Conditions
              </label>
            </div>
            <button type="submit" className="register-button">
              Register
            </button>
          </form>
          <p className="login-text">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>

        <div className="register-right">
         <img src={oceanImage} alt="Wellness" />
        </div>
      </div>
    </div>
  );
};

export default Register;
