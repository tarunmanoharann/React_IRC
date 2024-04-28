import React from "react";
import '../assets/css/nav.css'

import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="header-area">
      <ul className="nav-links">
        <li className="center">
          <Link to="/">
            <b>Beverage</b>
          </Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/register">Register </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
