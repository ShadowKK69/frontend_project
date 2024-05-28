import React from "react";
import './About.css';
import FabioPic from '../../assets/fabio2.jpg'
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <>
      
      <div class="about-container">
        <div class="profile-pic">
            <img src={FabioPic} alt="Liza" />
        </div>
        <div class="intro">
            <span class="badge">Web Developer</span>
            <h1>Hi, I'm Fábio 👋</h1>
            <h2>your strategic partner for web apps</h2>
            <p>From a young age, I always loved programming. Now, I'm dedicated to honing my skills, aiming to <strong>create the best apps</strong> possible. My passion drives me to <strong>learn and innovate constantly</strong>, turning dreams into reality. My journey is inspiring, showcasing a relentless pursuit of excellence in the ever-evolving world of technology. I'm committed to pushing boundaries!</p>
        </div>
        <div class="stats">
            <div class="stat">
                <p>Years experience</p>
                <p>1</p>
            </div>
            <div class="stat">
                <p>Projects completed</p>
                <p>1</p>
            </div>
        </div>
      </div>

      <section className="skill-info full-width">
        <div className="skill-info-wrapper">
          <h3>What can I do for you</h3>
          <div className="work-info">
            <div className="info">
              <div className="info-title">For businesses</div>
              <div className="info-description">I design interfaces that are friendly and valuable for customers and easy to implement for engineers.</div>
            </div>
            <div className="info">
              <div className="info-title">For startups</div>
              <div className="info-description">I help to identify the problem and design an MVP. I will advise on tools for building if you don't have an engineer or development resources.</div>
            </div>
            <div className="info">
              <div className="info-title">For product teams</div>
              <div className="info-description">I design growth experiments and help your team look at the challenges differently to build a better product.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="toolset-info">
        <div className="skills-wrapper">
          <h3 className="skills-heading">My skill/toolset</h3>
          <div className="skills-secondary-heading">UI/UX and graphic tools</div>
          <div className="skills">
            <div className="skills-badge">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 48 48">
                  <path fill="#e64a19" d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"></path>
                  <path fill="#7c4dff" d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"></path>
                  <path fill="#66bb6a" d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"></path>
                  <path fill="#ff7043" d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"></path>
                  <circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
              </svg>
              <div className="badge-text">Figma</div>
            </div>

            <div className="skills-badge">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 48 48">
                <path fill="#03A9F4" d="M6,10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.209-1.791,4-4,4H10c-2.209,0-4-1.791-4-4V10z"></path>
                <path fill="#020F16" d="M20.016,19.174h-2.002v4.434h1.973c0.547,0,0.97-0.179,1.27-0.537s0.449-0.879,0.449-1.563c0-0.71-0.153-1.274-0.459-1.694S20.53,19.181,20.016,19.174z"></path>
                <path fill="#020F16" d="M9,9v30h30V9H9z M23.365,24.789C22.539,25.597,21.393,26,19.928,26h-1.914v5h-2.871V16.781h4.844c1.406,0,2.528,0.437,3.364,1.309s1.255,2.005,1.255,3.398S24.192,23.981,23.365,24.789z M32.682,30.336c-0.709,0.573-1.641,0.859-2.793,0.859c-0.775,0-1.459-0.151-2.051-0.454s-1.057-0.725-1.392-1.265s-0.453-1.123-0.453-1.748h2.627c0.014,0.481,0.125,0.843,0.337,1.084s0.558,0.361,1.04,0.361c0.742,0,1.113-0.335,1.113-1.006c0-0.234-0.112-0.451-0.337-0.649S30,27.052,29.225,26.713c-1.139-0.462-1.922-0.94-2.349-1.436s-0.64-1.11-0.64-1.846c0-0.925,0.334-1.688,1.001-2.29s1.552-0.903,2.651-0.903c1.158,0,2.086,0.3,2.783,0.898s1.045,1.403,1.045,2.412h-2.764c0-0.859-0.357-1.289-1.074-1.289c-0.293,0-0.533,0.091-0.723,0.273s-0.283,0.437-0.283,0.762c0,0.234,0.104,0.441,0.313,0.62s0.699,0.435,1.475,0.767c1.127,0.417,1.922,0.881,2.388,1.392s0.698,1.174,0.698,1.987C33.746,29.005,33.391,29.763,32.682,30.336z"></path>
              </svg>
              <div className="badge-text">Photoshop</div>
            </div>

            <div className="skills-badge">
              <svg width="45" height="45" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 20.3335H16V27.0002L9 20.3335Z" fill="#0055FF"/>
                <path d="M16 13.6665H9V20.3332H23L16 13.6665Z" fill="#00AAFF"/>
                <path d="M9 7L16 13.6667H23V7H9Z" fill="#88DDFF"/>
              </svg>
              <div className="badge-text">Framer</div>
            </div>
          </div>

          <div className="skills-secondary-heading">Web development</div>
          <div className="skills">
            <div className="skills-badge">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 48 48">
                <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                <path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path>
                <path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
              </svg>
              <div className="badge-text">HTML</div>
            </div>

            <div className="skills-badge">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 48 48">
                <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                <path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path>
                <path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
              </svg>
              <div className="badge-text">CSS</div>
            </div>

            <div className="skills-badge">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 48 48">
                <path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path>
                <path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path>
                <path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path>
                <circle cx="24" cy="24" r="4" fill="#80deea"></circle>
              </svg>
              <div className="badge-text">React</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;