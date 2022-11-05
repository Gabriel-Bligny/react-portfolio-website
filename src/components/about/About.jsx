import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { IoMdSchool } from 'react-icons/io'
import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'

const About = () => {

  const { t } = useTranslation()

  return (
    <section id='about'>
      <h5>{t('about1')}</h5>
      <h2>{t('about2')}</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <IoMdSchool className='about__icon' />
              <h5>Master IIA</h5>
              <small><Trans i18nKey='IIA'></Trans></small>
            </article>

            <article className='about__card'>
              <IoMdSchool className='about__icon' />
              <h5>ESIREM</h5>
              <small><Trans i18nKey='engineeringSchool'></Trans></small>
            </article>

            <article className='about__card'>
              <IoMdSchool className='about__icon' />
              <h5>IUT Dijon</h5>
              <small><Trans i18nKey='DUT'></Trans></small>
            </article>
          </div>

          <p><Trans i18nKey='presentation1'></Trans></p>
          <p><Trans i18nKey='presentation2' values={{ age: Math.floor((Date.now() - new Date(1998, 2, 5)) / 31557600000) }}></Trans></p>
          <p><Trans i18nKey='presentation3'></Trans></p>
          <p><Trans i18nKey='presentation4'></Trans></p>
          <p><Trans i18nKey='presentation5'></Trans></p>
          <p><Trans i18nKey='presentation6'></Trans></p>

          {/* <a href='#contact' className='btn btn-primary'>Discutons ensemble</a> */}

        </div>
      </div>
    </section >
  )
}

export default About