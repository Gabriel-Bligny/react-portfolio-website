import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { Trans } from 'react-i18next'
import { useTranslation } from 'react-i18next'

const Experience = () => {

  const { t } = useTranslation();

  return (
    <section id='experience'>
      <h5> <Trans i18nKey='experience1' /> </h5>
      <h2> <Trans i18nKey='experience2' /> </h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3> <Trans i18nKey='experience3' /> </h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className='text-light'> {t('experienceIntermediate')} </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className='text-light'> {t('experienceIntermediate')} </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'> {t('experienceIntermediate')} </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'> {t('experienceBasic')} </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Tailwind CSS</h4>
                <small className='text-light'> {t('experienceIntermediate')} </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className='text-light'> {t('experienceIntermediate')} </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Angular</h4>
                <small className='text-light'> {t('experienceIntermediate')} </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Next.js</h4>
                <small className='text-light'> <Trans i18nKey='experienceBasic' /> </small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3> <Trans i18nKey='experience4' /> </h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'> {t('experienceIntermediate')} </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'> {t('experienceIntermediate')} </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className='text-light'> {t('experienceBasic')} </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>SQL</h4>
                <small className='text-light'> {t('experienceAdvanced')} </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className='text-light'> {t('experienceIntermediate')} </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>C++</h4>
                <small className='text-light'> {t('experienceIntermediate')} </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>C#</h4>
                <small className='text-light'> {t('experienceAdvanced')} </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Java</h4>
                <small className='text-light'> {t('experienceIntermediate')} </small>
              </div>
            </article>

          </div>

        </div>
      </div>

    </section>
  )
}

export default Experience