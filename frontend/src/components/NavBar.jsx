import React, { useState } from "react";
import "../css/NavBar.css";

function NavBar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
      <div className="navbar_logo">
        <img src="src/assets/logo2parking.jpg" alt="logo parking" />
      </div>
      <ul className="navbar_links">
        <li className="navbar_item slideInDown-1">
          <a href="/" className="navbar_link">
            Accueil
          </a>
        </li>
        <li className="navbar_item slideInDown-1">
          <a href="/" className="navbar_link">
            Recherche
          </a>
        </li>
        <li className="navbar_item slideInDown-1">
          <a href="/" className="navbar_link">
            Questions
          </a>
        </li>
      </ul>
      <button className="navbar_burger" type="button" onClick={handleShowLinks}>
        <span className="burger-bar" />
      </button>
    </nav>
  );
}

export default NavBar;
