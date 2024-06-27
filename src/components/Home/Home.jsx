import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
import '../../styles.css';
import Footer from "../Footer/Footer";

const Home = () => {

  return (
    <div className="home-wrapper">
      <div className="rgb-line"></div>
      <main className="home-content">
        <img src="/assets/Fabio.jpeg" alt="" className="home-photo" />
        <h1 className="home-title">Hi, I'm Fábio — Full Stack Developer</h1>
        <h2 className="home-description">I enjoy creating products from scratch and improve existing ones. <br></br>In simple terms, I create <span id="words">websites</span> that make a profit or enhance business.</h2>

        <div className="home-info">
          <Link to="/contact" className="btn contact-me">Let's talk</Link>
          <div className="job-wrapper">
            <div className="circle"></div>
            <div className="open-job">Open for opportunities</div>
          </div>
        </div>
      </main>

      <section className="main-portfolio">
        <h3 className="portfolio-title">Portfolio projects</h3>
        <h3 className="portfolio-description">Every project is like a new little story:<br></br> unique starting points and tasks, but all with a happy end.</h3>
      </section>

      <Footer />
    </div>
  );
}

export default Home;