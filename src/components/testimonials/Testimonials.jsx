import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: 'Name1',
    review: 'Review 1',
  },
  {
    avatar: AVTR2,
    name: 'Name2',
    review: 'Review 2',
  },
  {
    avatar: AVTR3,
    name: 'Name3',
    review: 'Review 3',
  },
  {
    avatar: AVTR4,
    name: 'Name4',
    review: 'Review 4',
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
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
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