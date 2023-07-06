import React from 'react'
import './testimonials.css'
import LOGO1 from '../../assets/DataFestLogoSMU.png'
import LOGO2 from '../../assets/J.P.-Morgan-Chase-Logo.png'
import LOGO3 from '../../assets/CodePath-1.png'
import {FaAward} from 'react-icons/fa'

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: LOGO1,
    name: 'ASA DataFest 2022',
    review: 'Ranked 1st in the competition among undergraduate teams from various universities competed over a long weekend to come up with the most compelling analysis of a large, real-world data set',
    link: 'https://www.linkedin.com/posts/danny-reyes-mendez_our-firms-culture-is-founded-on-the-commitment-activity-6937478515105685504-kpJZ?utm_source=share&utm_medium=member_desktop'
  },
  {
    avatar: LOGO2,
    name: 'Software Engineer Virtual Experience',
    review: 'Interfaced with a stock price data feed to monitor stock price. Used JPMorgan Chase & Co. frameworks and tools to display data visually for traders.',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_vBn3c9MEh7yohz9P9_1682276195278_completion_certificate.pdf'
  },
  {
    avatar: LOGO3,
    name: 'Intro to CyberSecurity',
    review: 'Learnt about topics such as steganography, networking protocols, cracking passwords, virus detection, and more, utilizing tools including Metasploit, Kali linux, and Shodan.',
    link: 'https://drive.google.com/file/d/1ePbxb3Jsjqvd7t7k6kvP4IokvBtw0JDQ/view?pli=1'
  }
]

const Testimonials = () => {
  return (
    <section id='awards_certification'>
      <h5>What I Achieved</h5>
      <h2>Awards & Certifications</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      >
        {
          data.map(({ avatar, name, review, link }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name} <a href={link}><FaAward/></a></h5>
              <small className="client__review">
                {review}
              </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials