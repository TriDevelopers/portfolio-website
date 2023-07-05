import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {HiOutlineCode} from 'react-icons/hi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src ={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            
            <article className="about__card">
              <HiOutlineCode className="about__icon" />
              <h5>Area of Interest</h5>
              <small>Backend Development, CyberSecurity, ML/AI, Blockchain</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Academic, Personal, Professional Completed Projects</small>
            </article>
          </div>

          <p>
            I am a rising senior CS student at the University of Texas - Dallas. My main focus is Backend Development. 
            I love to explore different field of software development. 
            I know a bit of everything from Frontend Development, CyberSecurity to ML/AI, Blockchain with main focus in Backend Development.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About