import React from "react";
import { Link , useNavigate } from "react-router-dom";
import "./AboutPage.css";

function AboutPage({ isLoggedIn }) {
    const navigate = useNavigate();

    return (
        <div>
            {/* Header Section */}
            <header className="header">
                <div className="logo">
                    <span className="logo-icon">DLA</span>
                    <div>
                        <p className="subtitle">Virtual <br /> Assistant</p>
                    </div>
                </div>
                <nav className="nav">
                    {/*<ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>*/}
                    <div className="auth">
                        {!isLoggedIn && (
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                            </>
                         )
                        }
                    </div>
                </nav>
            </header>

            <div className="back-button-container">
                <button className="back-button" onClick={() => navigate(-1)}>⬅ Back</button>
            </div>

            {/* About Section */}
            <section className="about">
                <h1>About Us</h1>
                <p>
                    At <strong>[Digital Legal Assistant]</strong>, we strive to make legal guidance accessible and easy to understand
                    for everyone. Whether you're dealing with personal legal matters, business regulations, or simply seeking knowledge 
                    about the law, our platform provides clear, reliable, and up-to-date information. While we do not provide direct 
                    legal representation, our resources, guides, and expert insights help you navigate the legal landscape with confidence.
                    Stay informed, stay empowered—because understanding your rights is the first step to justice.

                </p>
                <p>
                Our platform not only provides up-to-date legal information but also connects you with experienced lawyers who can 
                offer professional guidance on your legal concerns. Whether you need insights on personal, business, or criminal law,
                we ensure that you stay ahead with the most relevant legal knowledge. At [Digital Legal Assistant], we believe that 
                understanding the law is a right, not a privilege. Our mission is to make legal information accessible and to empower 
                individuals with the knowledge they need to make informed decisions.Stay updated, stay informed, and connect with
                 legal experts—all in one place.
                </p>
                <p>
                Stay Informed, Stay Empowered! Explore the latest enforced laws, stay updated with daily legal news, and connect with
                 experienced lawyers—all in one place. Whether you're seeking legal insights or professional guidance, we’ve got you
                 covered. Don't let legal complexities hold you back. Know your rights, understand the law, and make informed 
                 decisions today!➡️ Browse Latest Laws | Read Legal News | Find a Lawyer"
                </p>

                <h2>Our Mission</h2>
                <p>
                    <strong>"Bridging the Gap Between Law and People."</strong><br />
                    we are committed to making legal information accessible to everyone. Our platform provides the latest enforced laws, daily
                     legal news, and insights into newly introduced legal apps. We also connect users with experienced lawyers, ensuring they 
                     receive the right guidance to navigate legal challenges confidently. Our mission is to simplify legal complexities and 
                      empower individuals with the knowledge they need to make informed decisions.
                </p>

                <h2>Our Vision</h2>
                <p>
                    <strong>"Know the Law, Know Your Rights."</strong><br />
                    We envision a world where legal awareness is not a privilege but a right. By offering a reliable platform for legal updates,
                    expert connections, and essential law-related resources, we aim to create a legally empowered society. Our goal is to keep 
                    individuals informed about their rights, promote justice, and ensure that everyone has access to the legal support they need.
                </p>

                <div className="cta">
                    <p style={{ color: "#e57575" }}>Stay Informed, Stay Empowered!</p>
                    <a href="#" className="btn">Explore More</a>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;
