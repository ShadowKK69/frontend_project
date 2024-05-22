import React from "react";
import './Navbar.css';

const Navbar = () => {
  return (
    <aside className="navbar">
      <a href="#Home" className="logo">
        <div>Fábio</div>
        <div>Rocha</div>
      </a>

      <nav className="nav">
        <ul className="navbar-list">
          <li>
            <a href="#home">
              <i className="icon-home"></i>
            </a>
          </li>
          <li>
            <a href="#about">
              <i className="icon-user"></i>
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <i className="icon-briefcase"></i>
            </a>
          </li>
          <li>
            <a href="#contact">
              <i className="icon-bubble"></i>
            </a>
          </li>
          <li>
            <a href="#quiz">
              <i className="icon-bulb"></i>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Navbar;
