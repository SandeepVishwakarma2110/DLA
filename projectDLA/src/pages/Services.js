import React from "react";
import { Link } from "react-router-dom";
import './Services.css'; // Make su.re to create this CSS file

function Services() {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="service-card">
        <h3>Scam Alerts</h3>
        <p>Stay updated on the latest scams and fraud warnings.</p>
        <Link to="/scam-alerts" className="service-link">Learn More</Link>
      </div>
      <div className="service-card">
        <h3>New Government Schemes</h3>
        <p>Discover the latest government policies and schemes.</p>
        <Link to="/govt-schemes" className="service-link">Learn More</Link>
      </div>
      <div className="service-card">
        <h3>New Laws</h3>
        <p>Get insights on recently passed laws and regulations.</p>
        <Link to="/new-laws" className="service-link">Learn More</Link>
      </div>
      <div className="service-card">
        <h3>Utility Services Guide</h3>
        <p>A step-by-step guide to help citizens apply for and access essential public utility services</p>
        <Link to="/process" className="service-link">Learn More</Link>
      </div>
    </section>
  );
}

export default Services;
