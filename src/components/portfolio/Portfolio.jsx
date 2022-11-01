import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Boutique en ligne",
    madewith: "Angular 14 + TailwindCSS",
    github: 'https://github.com/Gabriel-Bligny/store',
    demo: 'https://angular-store-iota.vercel.app'
  },
  {
    id: 2,
    image: IMG2,
    title: "Refonte de l'interface de Spotify",
    madewith: "Next.js (React) + TailwindCSS + Spotify API",
    github: 'https://github.com/Gabriel-Bligny/CloneSpotify',
    demo: 'https://clone-spotify-nine.vercel.app/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mes projets personnels</h5>
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
                <h4>En utilisant: </h4>
                <h4>{madewith}</h4>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>Ce site Internet :)</h3>
          <h4>En utilisant: </h4>
          <h4>React</h4>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Gabriel-Bligny/react-portfolio-website" className='btn' target='_blank'>GitHub</a>
            <a className='btn btn-disabled' target='_blank'>Vous y êtes déjà!</a>
          </div>
        </article>


      </div>
    </section>
  )
}

export default Portfolio