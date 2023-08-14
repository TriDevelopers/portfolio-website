import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='professionalexperience'>
      <h5>What I Did</h5>
      <h2>Professional Experience</h2>

      <div className="container services__container">
        <article className="services">
          <div className="services__head">
            <h3>Software Engineer - Intern</h3>
            <h3><a href="https://www.linkedin.com/company/svtechnologiesjsc/" target="_blank">@ SVTech</a></h3>
          </div>

          <ul className="services__list">
            <li>
              <BiCheck className='services__list-icon' />
              <p>Developed a RESTful API application with Java and Spring Boot</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Analyzed and integrated data from multiple 3rd party APIs</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Deployed the application onto an Ubuntu server</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Improved the accuracy of the facial recognition system by 20%</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Allowed for seamless integration and boosted team performance by 30%</p>
            </li>
          </ul>
        </article>
        {/* End of SVTech */}
        <article className="services">
          <div className="services__head">
            <h3>Software Engineer - Volunteer</h3>
            <h3><a href="https://www.linkedin.com/company/avolta-inc/" target="_blank">@ Avolta Inc.</a></h3>
          </div>

          <ul className="services__list">
            <li>
              <BiCheck className='services__list-icon' />
              <p>Developed multiple API endpoints with Python and Flask</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Developed functions to authenticate and authorize user</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Implemented parameterized queries to avoid SQL Injection</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Improved the security of database queries function</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Currently developing a GPS system for the application</p>
            </li>
          </ul>
        </article>
        {/* End of Avolta */}
      </div>
    </section>
  )
}

export default Services