import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import { Trans, useTranslation } from 'react-i18next'

const Portfolio = () => {

  const { t } = useTranslation();

  const P1 = t('portfolioP1');
  const P2 = t('portfolioP2');
  const P3 = t('portfolioP3');
  const P4 = t('portfolioP4');

  const data = [
    {
      id: 1,
      image: IMG1,
      title: P1,
      madewith: "Angular 14 + TailwindCSS",
      github: 'https://github.com/Gabriel-Bligny/store',
      demo: 'https://angular-store-iota.vercel.app'
    },
    {
      id: 2,
      image: IMG2,
      title: P2,
      madewith: "Next.js (React) + TailwindCSS + Spotify API",
      github: 'https://github.com/Gabriel-Bligny/CloneSpotify',
      demo: 'https://clone-spotify-nine.vercel.app/'
    },
    {
      id: 3,
      image: IMG4,
      title: P4,
      madewith: "MERN stack + Socket.io",
      github: 'https://github.com/Gabriel-Bligny/mern-chat-app',
      demo: 'https://mern-chat-app-gb.herokuapp.com'
    }
  ]

  return (
    <section id='portfolio'>
      <h5> <Trans i18nKey='portfolio1' /> </h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, madewith, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <h4> <Trans i18nKey='portfolio2' /> </h4>
                <h4>{madewith}</h4>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel='noreferrer'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                </div>
              </article>
            )
          })
        }

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>{P3}</h3>
          <h4> <Trans i18nKey='portfolio2' /> </h4>
          <h4>React</h4>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Gabriel-Bligny/react-portfolio-website" className='btn' target='_blank' rel='noreferrer'>GitHub</a>
            <a className='btn btn-disabled' target='_blank'> <Trans i18nKey='portfolio3' /> </a>
          </div>
        </article>


      </div>
    </section>
  )
}

export default Portfolio