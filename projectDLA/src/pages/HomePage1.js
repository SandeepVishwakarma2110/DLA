import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './HomePage1.css'
import facebookSvg from '../Assets/facebook.svg';
import instagramSvg from '../Assets/instagram.svg';
import linkedinSvg from '../Assets/linkedin.svg';
function HomePage() {
    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    }


    return (
        <div>
            {/*Header Section*/}
            <div>
                <header className="header">
                    <div className="logo">
                        <span className="logo-icon">DLA</span>
                        <div>
                            <p className="subtitle">Virtual <br /> Assistant</p>
                        </div>
                    </div>
                    <nav className="nav">
                        <ul className="nav-links">
                            <li><a href="#">Services</a></li>
                            <li><Link to="/about">About</Link></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <div className="auth">
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </div>
                        <div className="social-icons">
                            <a href="#"><img src={facebookSvg} alt="Facebook" /></a>
                            <a href="#"><img src={instagramSvg} alt="Instagram" /></a>
                            <a href="#"><img src={linkedinSvg} alt="LinkedIn" /></a>
                        </div>
                        <div className="menu-icon" onClick={toggleMenu}>☰</div>
                    </nav>
                </header>

                {/*Hero Section*/}
                <section className="hero">
                    <h2>I am Your Digital Legal Assistant</h2>
                    <p></p>
                    <a href="#" className="btn">See Services</a>
                </section>

                {/*Mobile Menu*/}


                <div className={`mobile-menu ${isMenuActive ? "active" : ""}`} id="mobileMenu">
                    <div className="close-icon" onClick={toggleMenu}>×</div>
                    <Link className="mobile_login" to="/login">Login</Link>
                    <Link className="mobile_register" to="/register">Register</Link>
                    <a href="#">Services</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <div className="social-icons">
                        <a href="#"><img src={facebookSvg} alt="Facebook" /></a>
                        <a href="#"><img src={instagramSvg} alt="Instagram" /></a>
                        <a href="#"><img src={linkedinSvg} alt="LinkedIn" /></a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HomePage;
