import React from 'react'
import './footer.css'

import { Trans } from 'react-i18next'
import { useTranslation } from 'react-i18next'

const Footer = () => {

  const { t } = useTranslation();

  return (
    <footer>
      <a href="#" className='footer__logo'> <Trans i18nKey='footer1' /> </a>

      <ul className='permalinks'>
        <li><a href="#"> {t('footer2')} </a></li>
        <li><a href="#about"> {t('footer3')} </a></li>
        <li><a href="#experiences"> {t('footer4')} </a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </footer>
  )
}

export default Footer