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
            <h3>Software Engineer - Volunteer</h3>
            <h3><a href="https://www.linkedin.com/company/avolta-inc/" target="_blank">@ Avolta Inc.</a></h3>
          </div>

          <ul className="services__list">
            <li>
              <BiCheck className='services__list-icon' />
              <p>Paragraph 1</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Paragraph 2</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Paragraph 3</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX services */}
        <article className="services">
          <div className="services__head">
            <h3>Software Engineer - Intern</h3>
            <h3><a href="https://www.linkedin.com/company/svtechnologiesjsc/" target="_blank">@ SVTech</a></h3>
          </div>

          <ul className="services__list">
            <li>
              <BiCheck className='services__list-icon' />
              <p>Paragraph 1</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Paragraph 2</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Paragraph 3</p>
            </li>
          </ul>
        </article>
        {/* End of Web services */}
        <article className="services">
          <div className="services__head">
            <h3>Tech Fellow</h3>
            <h3><a href="https://www.linkedin.com/school/codepath-org/" target="_blank">@ CodePath</a></h3>
          </div>

          <ul className="services__list">
            <li>
              <BiCheck className='services__list-icon' />
              <p>Paragraph 1</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Paragraph 2</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Paragraph 3</p>
            </li>
          </ul>
        </article>
        {/* End of Content services */}
      </div>
    </section>
  )
}

export default Services