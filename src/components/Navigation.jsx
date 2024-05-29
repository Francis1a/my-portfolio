import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navigation() {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">
              About me
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/labotratory" className="nav-links">
              Labs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">
              Message Me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
