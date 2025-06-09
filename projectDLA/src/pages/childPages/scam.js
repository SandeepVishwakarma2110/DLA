
import React, { useEffect, useState } from "react";
import './scam.css';

function ScamAlerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/scam-alerts")
      .then((response) => response.json())
      .then((data) => setAlerts(data))
      .catch((error) => console.error("Error fetching scam alerts:", error));
  }, []);

  return (
    <div className="scam-container">
      <h2>Scam Alerts</h2>
      <ul  className="scam-list">
        {alerts.map((alert, index) => (
          <li key={index} className="scam-card">
            <h3>{alert.title}</h3>
            <p>{alert.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScamAlerts;

