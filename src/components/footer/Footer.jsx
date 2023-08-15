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
        <li><a href="#techstack">Tech Stack</a></li>
        <li><a href="#professionalexperience">Professional Experience</a></li>
        <li><a href="#project">Activities</a></li>
        <li><a href="#awards_certification">Awards & Certifications</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/tridinhminhngo/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/TriDevelopers" target="_blank"><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>Template inspired from </small>
        <small><a href="https://www.youtube.com/@EGATORTUTORIALS" target="_blank">EGATOR</a></small>
        <br/>
        <small>Modified and Coded by </small>
        <small><a href="#">Tri Ngo</a></small>
      </div>
    </footer>
  )
}

export default Footer