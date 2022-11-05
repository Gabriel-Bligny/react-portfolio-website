import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/gabriel-bligny/" target="_blank" rel="noreferrer"><BsLinkedin /> LinkedIn</a>
      <a href="https://github.com/Gabriel-Bligny" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
    </div>
  )
}

export default HeaderSocials