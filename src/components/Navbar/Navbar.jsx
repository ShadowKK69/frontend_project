import React, { useState } from "react";
import './Navbar.css';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  }

  return (
    <nav>
        <div className="title">
          <Link to="/"><a href="" onClick={closeMenu}>Fábio <span>Rocha</span></a></Link>
        </div>
        <div className="menu" onClick={() => {
          setMenuOpen(!menuOpen);
        }}>
          <i class="fa-solid fa-bars fa-2x"></i>
        </div>
        <ul className={`${menuOpen ? "open" : ""} nav-links`}>
          <li>
            <NavLink to="/" onClick={closeMenu}>Home page</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" onClick={closeMenu}>Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/quiz" onClick={closeMenu}>Quiz</NavLink>
          </li>
          <li className="nav-socials">
            <a href="#" onClick={closeMenu}><i class="fa-brands fa-linkedin-in"></i></a>
          </li>
          <li className="nav-socials">
            <a href="#" onClick={closeMenu}><i class="fa-brands fa-twitter"></i></a>
          </li>
          <li className="contact">
            <NavLink to="/contact" onClick={closeMenu}>Get in touch</NavLink>
          </li>
        </ul>
    </nav>
  );
}

export default Navbar;
