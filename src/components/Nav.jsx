import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import TypeWritereffect from "./TypeWritereffect";

function Nav() {
  return (
    <>
      <div className="hdr-logo">
        <TypeWritereffect
          datatype={[
            "Hi! Im Francis",
            "I am Creative",
            "I Love Design",
            "I Love to Develop",
          ]}
        />
      </div>
      <nav className="navbar">
        <div className="contact">
          <Link to="#contact">Send me a Letter</Link>
        </div>
        {/* <ul className="nav-list">
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
        </ul> */}
      </nav>
    </>
  );
}

export default Nav;
