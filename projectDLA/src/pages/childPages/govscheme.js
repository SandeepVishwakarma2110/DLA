import React, { useEffect, useState } from "react";
import './govscheme.css';

function GovtSchemes() {
  const [schemes, setSchemes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/govt-schemes")
      .then((response) => response.json())
      .then((data) => setSchemes(data))
      .catch((error) => console.error("Error fetching schemes:", error));
  }, []);

  return (
    <div  className="gov-scheme-container">
      <h2>New Government Schemes</h2>
      <ul className="gov-scheme-list">
        {schemes.map((scheme, index) => (
          <li key={index} className="gov-scheme-card">
            <h3>{scheme.title}</h3>
            <p>{scheme.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GovtSchemes;
