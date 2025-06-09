import React, { useEffect, useState } from "react";
import './newlaws.css';


function NewLaws() {
  const [laws, setLaws] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/new-laws")
      .then((response) => response.json())
      .then((data) => setLaws(data))
      .catch((error) => console.error("Error fetching laws:", error));
  }, []);

  return (
    <div  className="new-laws-container">
      <h2>Recently Passed Laws</h2>
      <ul className="laws-list">
        {laws.map((law, index) => (
          <li key={index} className="law-card">
            <h3>{law.title}</h3>
            <i>{law.date_passed}</i>
            <p>{law.description}</p>
          </li>
        ))}
      </ul>
    </div>
    
    
    
    
    
    
    
    
    
    
  );
}

export default NewLaws;
