import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import { useTranslation } from 'react-i18next'

const Header = () => {

  const { t } = useTranslation();

  return (
    <header>
      <div className="container header__container">
        <h5> {t('header1')} </h5>
        <h1>Gabriel BLIGNY</h1>
        <h5 className='text-light'> {t('header2')} </h5>
        <CTA />
        <HeaderSocials />

      </div>
    </header>
  )
}

export default Header