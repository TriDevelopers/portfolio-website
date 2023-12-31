import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/code_intro.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Tri Ngo</h1>
        <h5 className="text-light">Computer Science Student</h5>
        <CTA />
        <HeaderSocials />
        
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down"> {/* Go straight to contact when click */}
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header