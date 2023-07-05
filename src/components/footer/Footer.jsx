import React from 'react'
import './footer.css'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">TRI NGO</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/tridinhminhngo/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/TriDevelopers" target="_blank"><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; EGATOR All right resevered</small>
      </div>
    </footer>
  )
}

export default Footer