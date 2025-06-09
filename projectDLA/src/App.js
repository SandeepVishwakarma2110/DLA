import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes , useNavigate } from "react-router-dom";
import HomePage1 from "./pages/HomePage1";
import HomePage2 from "./pages/HomePage2";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import KYNpage from "./pages/KYNpage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/Services";
import ScamPage from "./pages/childPages/scam";
import NewlawsPage from "./pages/childPages/newlaws";
import GovschemePage from "./pages/childPages/govscheme";
import ProcessPage from "./pages/childPages/process";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage1 setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home2" element={isLoggedIn ? <HomePage2 setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} /> : <HomePage1 setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/KYN" element={<KYNpage />} />
          <Route path="/about" element={<AboutPage isLoggedIn={isLoggedIn} />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/scam-alerts" element={<ScamPage />} />
          <Route path="/new-laws" element={<NewlawsPage />} />
          <Route path="/govt-schemes" element={<GovschemePage />} />
          <Route path="/process" element={<ProcessPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
