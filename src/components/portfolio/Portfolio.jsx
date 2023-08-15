import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/hackdfw.jpg'
import IMG2 from '../../assets/ASA.jpg'
import IMG3 from '../../assets/profolio.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'HackDFW 2022',
    github: 'https://github.com/orgs/HackDFW-2022-Weather-Things/repositories',
    presentation: 'https://docs.google.com/presentation/d/1YaWx2d5tiD4lYz7tUEk2GxoHo6yQGAbbE2N85R08zGw/edit?usp=sharing'
  },
  {
    id: 2,
    image: IMG2,
    title: 'ASA DataFest 2021',
    github: 'https://docs.google.com/document/d/1sX6nuQVfyVoAo30yvvbOdfFvL7hfLSR72X5TDc3m5Pg/edit?usp=sharing',
    presentation: 'https://docs.google.com/presentation/d/1nNxz0vXgXQl2-FDlhiqEWW5GAdAi1pU0YDOzRF9mU00/edit#slide=id.p'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Portfolio Website',
    github: 'https://github.com/TriDevelopers/portfolio-website',
    presentation: 'https://tri-ngo-portfolio.netlify.app'
  }
]

const Portfolio = () => {
  return (
    <section id='project'>
      <h5>My Recent Competitions/Projects</h5>
      <h2>Activities</h2>

      <div className="container portfolio-container">
        {
          data.map(({ id, image, title, github, presentation }) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target='_blank'>GitHub/Docs</a>
                <a href={presentation} className="btn btn-primary" target='_blank'>Presentation</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio