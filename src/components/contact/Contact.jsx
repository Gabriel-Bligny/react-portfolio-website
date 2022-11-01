import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Apprenons à se connaître</h5>
      <h2>Contactez Moi</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>gabriel.bligny@wanadoo.fr</h5>
            <a href='mailto:gabriel.bligny@wanadoo.fr' target='_blank'>Envoyer un email</a>
          </article>

        </div>

        {/* <form action="">
          <input type="text" name='name' placeholder='Votre Nom' required />
          <input type="text" name='email' placeholder='Votre Email' required />
          <textarea name='message' rows="7" placeholder='Votre Messsage' required />
          <button type="submit" className='btn btn-primary'>Envoyer message</button>
        </form> */}

      </div>
    </section>
  )
}

export default Contact