import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram,faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'; // Import the GitHub and Instagram icons

const Footer = () => {
  return (
    <divm className="footer">
    <div className="footer-icons">
      <a target='main' href="https://github.com/Rishavagarwal12345">
      <FontAwesomeIcon icon={faGithub} beatFade size='xl'  style={{ color: "#ffffff" }} />
      </a>
      <a href="https://www.instagram.com" target='main'>
      <FontAwesomeIcon icon={faInstagram} beatFade size='xl'  style={{ color: "#ffffff" }} />
      </a>
      <a href="https://www.linkedin.com/feed/" target='main'>
      <FontAwesomeIcon icon={faLinkedin} beatFade size='xl' style={{ color: "#ffffff" }} />
      </a>
      <a href="https://www.youtube.com/@Aggragor/about" target='main'>
      <FontAwesomeIcon icon={faYoutube} beatFade size='xl' style={{ color: "#ffffff" }} />
      </a>
    </div>

    <div className="copyright">
      All Right Preserved By Rishav
  
    </div>
    </divm>
  );
};

export default Footer;
