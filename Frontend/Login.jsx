import React, { useState } from 'react';
import '../styles/Login.css';
import oceanImage from '../assets/icon.png';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ Simulate login success
    localStorage.setItem('isLoggedIn', 'true'); // Store login status

    console.log({ email, password, rememberMe });

    // ✅ Redirect to home page
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Left Side */}
        <div className="login-left">
          <h2 className="login-title">Welcome Back</h2>
          <p className="login-subtitle">Continue your journey</p>

          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="login-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>
              <a href="#" className="forgot-password">Forgot Password?</a>
            </div>

            <button type="submit" className="login-button">Login</button>
          </form>

          <div className="divider">or</div>

          <button type="button" className="google-button">
            <FcGoogle size={20} style={{ marginRight: '8px' }} />
            Sign in with Google
          </button>

          <p className="signup-text">
            Don&apos;t have an account? <a href="/register">Sign up</a>
          </p>
        </div>

        {/* Right Side */}
        <div className="login-right">
          <img src={oceanImage} alt="Wellness" />
        </div>
      </div>
    </div>
  );
};

export default Login;
