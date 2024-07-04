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

        <div className="portfolio-container">
          <div className="portfolio-project">
            <div className="project-image">
              <img src="/assets/website.png" alt=""/>
            </div>
            <div className="project-details">
              <h3>Project Title</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam placeat hic eum excepturi? Ducimus quo sapiente eligendi incidunt maxime sunt maiores saepe aliquid unde rerum nostrum, similique amet fuga delectus quidem? Laboriosam, cupiditate accusantium! Temporibus cupiditate esse nemo quasi nam maiores laborum at eaque magnam, similique ullam sed maxime molestiae enim nihil aliquid suscipit aut minus? Optio autem, nam labore aut quidem id corrupti dolorum reiciendis laborum quis iusto sit deleniti fugiat neque quasi quae, vero voluptatibus nobis unde. Atque!</p>
              <div className="project-links">
                  <a href="#" className="btn">Try Demo</a>
              </div>
            </div>
          </div>
          <div className="portfolio-project">
            <div className="project-image">
              <img src="/assets/website.png" alt=""/>
            </div>
            <div className="project-details">
              <h3>Project Title</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam placeat hic eum excepturi? Ducimus quo sapiente eligendi incidunt maxime sunt maiores saepe aliquid unde rerum nostrum, similique amet fuga delectus quidem? Laboriosam, cupiditate accusantium! Temporibus cupiditate esse nemo quasi nam maiores laborum at eaque magnam, similique ullam sed maxime molestiae enim nihil aliquid suscipit aut minus? Optio autem, nam labore aut quidem id corrupti dolorum reiciendis laborum quis iusto sit deleniti fugiat neque quasi quae, vero voluptatibus nobis unde. Atque!</p>
              <div className="project-links">
                  <a href="#" className="btn">Try Demo</a>
              </div>
            </div>
          </div>
          <div className="portfolio-project">
            <div className="project-image">
              <img src="/assets/website.png" alt=""/>
            </div>
            <div className="project-details">
              <h3>Project Title</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam placeat hic eum excepturi? Ducimus quo sapiente eligendi incidunt maxime sunt maiores saepe aliquid unde rerum nostrum, similique amet fuga delectus quidem? Laboriosam, cupiditate accusantium! Temporibus cupiditate esse nemo quasi nam maiores laborum at eaque magnam, similique ullam sed maxime molestiae enim nihil aliquid suscipit aut minus? Optio autem, nam labore aut quidem id corrupti dolorum reiciendis laborum quis iusto sit deleniti fugiat neque quasi quae, vero voluptatibus nobis unde. Atque!</p>
              <div className="project-links">
                  <a href="#" className="btn">Try Demo</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;