import React from "react";
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Let's work together!</h2>
      <p>Contact me in case of any questions or opportunities 🚀</p>
      <div className="contact-email">
        <a href="mailto:fabiodaniel152015@hotmail.com">fabiodaniel152015@hotmail.com</a>
        <i className="fa-solid fa-arrow-right"></i>
      </div>
      <div className="contact-socials">
        <a href="https://linkedin.com" target="_blank" rel='noopener' ><i className="fa-brands fa-linkedin-in"></i></a>
        <a href="https://twitter.com" target="_blank" rel='noopener' ><i className="fa-brands fa-twitter"></i></a>
      </div>
    </div>
  );
}

export default Contact;