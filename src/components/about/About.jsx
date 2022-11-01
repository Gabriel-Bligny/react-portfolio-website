import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { IoMdSchool } from 'react-icons/io'

const About = () => {
  return (
    <section id='about'>
      <h5>Apprenez En Plus</h5>
      <h2>A Propos De Moi</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <IoMdSchool className='about__icon' />
              <h5>Master IIA</h5>
              <small>Image et IA</small>
            </article>

            <article className='about__card'>
              <IoMdSchool className='about__icon' />
              <h5>ESIREM</h5>
              <small>Ecole d'Ingénieur</small>
            </article>

            <article className='about__card'>
              <IoMdSchool className='about__icon' />
              <h5>IUT Dijon</h5>
              <small>DUT Informatique</small>
            </article>
          </div>

          <p>Bonjour! <br></br><br></br>
            Je me présente, <b>Gabriel</b>, {Math.floor((Date.now() - new Date(1998, 2, 5)) / 31557600000)} ans, et je vis à Dijon, la ville de la moutarde (et du Kir)!<br></br>
            <br></br>Après avoir suivi un <b>Bac STI2D</b> (spécialité SIN), j'ai poursuivi vers un <b>DUT informatique</b> (BAC +2), puis en <b>école d'ingénieur</b> (BAC +5) effectuée en double diplôme avec un <b>Master en Image (2D et 3D) et Intelligence Artificielle</b>.<br></br>
            Maintenant que j'ai réalisé des stages pour plusieurs entreprises (Incluant la gestion de <b>base de données</b>, l'<b>amélioration d'un ERP</b> interne à l'entreprise, et la <b>conception de jeux vidéo</b>), et également fait quelques travaux à mon compte, je suis maintenant à la recherche d'un travail à temps plein!<br></br><br></br>
            Je dispose d'un bon anglais conversationnel. Mon score au TOEIC était de 985.<br></br><br></br>
            En dehors de la <b>programmation</b>, j'adore également <b>voyager</b> (en particulier pour rendre visite à des amis rencontrés sur internet). Je me suis également trouvé un intérêt pour l'artistique, et compte même bientôt acquérir une guitare :)
          </p>

          {/* <a href='#contact' className='btn btn-primary'>Discutons ensemble</a> */}

        </div>
      </div>
    </section>
  )
}

export default About