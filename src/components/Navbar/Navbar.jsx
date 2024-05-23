import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <div className="title">
          <a href="">Fábio <span>Rocha</span></a>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home page</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/quiz">Quiz</Link>
          </li>
          <li className="nav-socials">
            <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
          </li>
          <li className="nav-socials">
            <a href="#"><i class="fa-brands fa-twitter"></i></a>
          </li>
          <li className="contact">
            <Link to="/contact">Get in touch</Link>
          </li>
        </ul>
    </nav>
  );
}

export default Navbar;
