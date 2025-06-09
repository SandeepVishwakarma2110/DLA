import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './LoginPage.css';
import facebookSvg from '../Assets/facebook.svg';
import instagramSvg from '../Assets/instagram.svg';
import linkedinSvg from '../Assets/linkedin.svg';

function LoginPage({setIsLoggedIn}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 

const handleLogin = async (e) => {
  e.preventDefault();
  try {
     await axios.post("http://localhost:5000/login", { username, password });
    //handleLogin();
      alert("Logged in successfully!");
      setIsLoggedIn(true);
      navigate("/home2");
  } catch (error) {
    if (error.response && error.response.status === 400) {
      alert("Invalid username or password.");
    } else {
      alert("An error occurred. Please try again.");
    }
  }
};


  return (
    <div>
      
      <div className="login-container">
            <header className="header">
                <div className="logo">
                    <span className="logo-icon">DLA</span>
                    <div>
                        <p className="subtitle">Virtual <br /> Assistant</p>
                    </div>
                </div>
            </header>

            <div className="login-content">
                <h2 className="login-title">Log In</h2>
                <form className="login-form" onSubmit={handleLogin}>
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
                    <button type="submit" className="btn login-btn">Log In</button>
                </form>
                <p className="register-prompt">
                    Don't have an account? <Link to="/register" className="register-link">Register</Link>
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
  );
}

export default LoginPage;
