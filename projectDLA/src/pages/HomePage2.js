// src/pages/HomePage1.js
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './HomePage2.css'
import facebookSvg from '../Assets/facebook.svg';
import instagramSvg from '../Assets/instagram.svg';
import linkedinSvg from '../Assets/linkedin.svg';
//import lawQueriesData from "../Assets/lawQueries.json";

function HomePage1({ setIsLoggedIn,isLoggedIn }) {

  const [lawQueries, setLawQueries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSolution, setFilteredSolution] = useState("");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);





  useEffect(() => {
    if (!isLoggedIn) return;

    const injectScript = document.createElement("script");
    injectScript.src = "https://cdn.botpress.cloud/webchat/v2.4/inject.js";
    injectScript.async = true;
    document.body.appendChild(injectScript);
  
    const configScript = document.createElement("script");
    configScript.src = "https://files.bpcontent.cloud/2025/05/26/16/20250526165337-QXBA0ES2.js";
    configScript.async = true;
    document.body.appendChild(configScript);
  
    return () => {
      document.body.removeChild(injectScript);
      document.body.removeChild(configScript);
    };
  }, [isLoggedIn]); 

//<script src="https://cdn.botpress.cloud/webchat/v2.4/inject.js"></script>
//<script src="https://files.bpcontent.cloud/2025/05/26/16/20250526165337-QXBA0ES2.js"></script>

  // useEffect(() => {
  //   // Load the data from the JSON file when the component mounts
  //   setLawQueries(lawQueriesData);
  // }, []);

  // const handleSearch = () => {
  //   // Search for the solution based on the query entered
  //   const result = lawQueries.find(
  //     (entry) => entry.query.toLowerCase() === searchTerm.toLowerCase()
  //   );

  //   // If a match is found, display its solution; otherwise, display "No match found"
  //   setFilteredSolution(result ? result.solution : "No match found");

  // }

  // useEffect(() => {
  //   fetch("http://localhost:5000/api/law-queries")
  //     .then((response) => response.json())
  //     .then((data) => setLawQueries(data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  // const handleSearch = () => {
  //   const result = lawQueries.find((entry) =>
  //     entry.query.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setFilteredSolution(result ? result.solution : "No match found");
  // };




  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setFilteredSolution("Please enter a search query.");
      return;
    }

    fetch(`http://localhost:5000/api/law-queries/search?q=${encodeURIComponent(searchTerm)}`)
      .then((response) => response.json())
      .then((data) => setFilteredSolution(data.solution || "No match found"))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setFilteredSolution("Error fetching data. Please try again.");
      });
  };




  const navigate = useNavigate();

  const handleLogout = () => { 
    setIsLoggedIn(false);
    navigate("/"); // Redirect to home2 on logout

  };


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
              {/*<li><a href="#">Services</a></li>*/}
              <li className="services-dropdown" 
              onMouseEnter={() => setIsDropdownOpen(true)} 
              onMouseLeave={() => setIsDropdownOpen(false)} >
                
              <li><Link to="/services">Services</Link></li>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/scam-alerts">Scam Alerts</Link></li>
                  <li><Link to="/govt-schemes">New Government Schemes</Link></li>
                  <li><Link to="/new-laws">New Laws</Link></li>
                </ul>
              )}
            </li>
              <li><Link to="/about">About</Link></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <div className="auth">
              <Link to="/" onClick={handleLogout} >Logout</Link>
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


          {/*  Know Your Knowledge*/}
          <div className="kyn_page">
            <h3>Let's Read some Laws</h3>
            <Link className="kyn_link"  to="/KYN">Click Here !</Link>
          </div>


          {/* Header, hero, and other sections of your HomePage */}

          <div className="search-bar-container">
            <input
              type="text"
              placeholder="Type your query here..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-bar"
            />
            <button onClick={handleSearch} className="search-button">Search</button>
          </div>

          {/* Display the filtered solution */}
          <div className="solution-container">
            {filteredSolution && (
              <p className="solution">{filteredSolution}</p>
            )}
          </div>






        </section>

        {/*Mobile Menu*/}


        <div className={`mobile-menu ${isMenuActive ? "active" : ""}`} id="mobileMenu">
          <div className="close-icon" onClick={toggleMenu}>×</div>
          <Link to="/login" onClick={handleLogout} >Logout</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
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

export default HomePage1;
