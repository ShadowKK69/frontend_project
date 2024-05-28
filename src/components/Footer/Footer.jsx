import './Footer.css'

const Footer = () => {
  return (
    <footer className='full-width'>
    <h3 className="footer-heading">Let's talk about your project:</h3>
    <a href="mailto:fabiodaniel152015@hotmail.com" className="footer-email">Click here to contact me</a>
    <div className="footer-socials">
      <a href="https://linkedin.com" target="_blank" rel='noopener' ><i class="fa-brands fa-linkedin-in"></i></a>
      <a href="https://twitter.com" target="_blank" rel='noopener' ><i class="fa-brands fa-twitter"></i></a>
    </div>
  </footer>
  );
}

export default Footer;