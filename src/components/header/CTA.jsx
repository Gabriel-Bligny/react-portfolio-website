import React from 'react'
import CV from '../../assets/cv.png'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Télécharger mon CV</a>
      <a href='#contact' className='btn btn-primary'>Discutons ensemble</a>
    </div>
  )
}

export default CTA