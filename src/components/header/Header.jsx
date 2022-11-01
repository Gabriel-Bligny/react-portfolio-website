import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Bonjour, je suis</h5>
        <h1>Gabriel BLIGNY</h1>
        <h5 className='text-light'>Developpeur</h5>
        <CTA />
        <HeaderSocials />

        {/* <div className='me'>
          <img src={ME} alt="me" />
        </div> */}

      </div>
    </header>
  )
}

export default Header