import React, { useEffect, useState } from "react";
import './process.css';


function Process() {
  const [process, setProcess] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/process")
      .then((response) => response.json())
      .then((data) => setProcess(data))
      .catch((error) => console.error("Error fetching laws:", error));
  }, []);

  return (
    <div  className="process-container">
      <h2>Utility Services Guide</h2>
      <ul className="process-list">
        {process.map((process, index) => (
          <li key={index} className="process-card">
            <h3>{process.name}</h3>
            <p>{process.steps}</p>
            <p>Helpline Number : <i>{process.contact_details.helpline_number}</i> </p>
            <address> Email : <a href={process.contact_details.email}>{process.contact_details.email}</a></address>
            <p>Application Form Link : <a href={process.contact_details.application_form}>{process.contact_details.application_form}</a> </p>

          </li>
        ))}
      </ul>
    </div>
      
    
  );
}

export default Process;
