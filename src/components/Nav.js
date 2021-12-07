import { Link } from "react-router-dom";
import React from "react";
import "./nav.css";

export const Nav = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };

  return (
    <nav id="nav-container">
      <ul>
        <li>
          <div id="yt">Youtube</div>
        </li>
        <li>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={linkStyle}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
