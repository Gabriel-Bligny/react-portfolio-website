import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { Trans } from 'react-i18next'

import { useTranslation } from 'react-i18next'

const Contact = () => {

  const { t } = useTranslation();

  return (
    <section id='contact'>
      <h5> {t('contact1')} </h5>
      <h2> {t('contact2')} </h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>gabriel.bligny@wanadoo.fr</h5>
            <a href='mailto:gabriel.bligny@wanadoo.fr' target='_blank' rel='noreferrer'> <Trans i18nKey='contact3' /> </a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact