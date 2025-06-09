import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './RegisterPage.css';
import { useNavigate } from "react-router-dom";
import facebookSvg from '../Assets/facebook.svg';
import instagramSvg from '../Assets/instagram.svg';
import linkedinSvg from '../Assets/linkedin.svg';

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password == confirmPassword) {
      try {
        await axios.post("http://localhost:5000/register", { username, password });
        alert("Registration successful! Please login.");
        navigate("/login");
      } 
      catch (error) {
        if (error.response && error.response.status === 400) {
          alert("Username already exists.");
        } else {
          alert("An error occurred. Please try again.");
        }
      }
    }

    else if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Logic for registering a new user (dummy example)
    //alert("Registration successful!");
    //navigate("/login");
  };

 
  return (
    <div>

    

<div>
      
      <div className="register-container">
            <header className="header">
                <div className="logo">
                    <span className="logo-icon">DLA</span>
                    <div>
                        <p className="subtitle">Virtual <br /> Assistant</p>
                    </div>
                </div>
            </header>

            <div className="register-content">
                <h2 className="register-title">Register</h2>
                <form className="register-form" onSubmit={handleRegister}>
                    <div className="form-group">
                        <label htmlFor="Username">Username</label>
                        <input
                           type="text"
                           placeholder="Username"
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}
                           required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input
                          type="password"
                          placeholder="Confirm Password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                         />
                    </div>
                    <button type="submit" className="btn login-btn">Register</button>
                </form>
                <p className="register-prompt">
                    have an account? <Link to="/login" className="register-link">Login</Link>
                </p>
            </div>

            <footer className="footer">
                <div className="social-icons">
                    <a href="#"><img src={facebookSvg} alt="Facebook" /></a>
                    <a href="#"><img src={instagramSvg} alt="Instagram" /></a>
                    <a href="#"><img src={linkedinSvg} alt="LinkedIn" /></a>
                </div>
            </footer>
        </div>

    </div>

    </div>
  );
}

export default RegisterPage;
