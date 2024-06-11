import React, { useState } from "react";
import './Navbar.css';
import { Link, NavLink } from "react-router-dom";
import ToggleDarkMode from '../ToggleDarkMode/ToggleDarkMode'

const Navbar = ({setIsDark, isDark}) => {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  }


  return (
    <nav>
        <div className="title">
          <Link to="/" onClick={closeMenu}>Fábio <span>Rocha</span></Link>
        </div>
        <div className="menu" onClick={() => {
          setMenuOpen(!menuOpen);
        }}>
          <i className="fa-solid fa-bars fa-2x"></i>
        </div>
        <ul className={`${menuOpen ? "open" : ""} nav-links`}>
          <li>
            <NavLink to="/" onClick={closeMenu}>Home page</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu}>About me</NavLink>
          </li>
          <li>
            <NavLink to="/quiz" onClick={closeMenu}>Quiz</NavLink>
          </li>
          <div className="nav-socials">
            <li>
              <a href="https://linkedin.com" target="_blank" rel='noopener' onClick={closeMenu}><i className="fa-brands fa-linkedin-in"></i></a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel='noopener' onClick={closeMenu}><i className="fa-brands fa-twitter"></i></a>
            </li>
            <li>
              <div><ToggleDarkMode isChecked={isDark} handleChange={() => setIsDark(!isDark)}/></div>
            </li>
          </div>
          <li className="btn contact">
            <NavLink to="/contact" onClick={closeMenu}>Get in touch</NavLink>
          </li>
        </ul>
    </nav>
  );
}

export default Navbar;
