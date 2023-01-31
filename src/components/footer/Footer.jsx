import React from 'react'
import './footer.css'

import {FaFacebookF, FaGithub, FaLinkedinIn} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>IR AL INCIO</a>
      <ul className='permalinks'>
        <li><a href='#'>Inicio</a></li>
        <li><a href='#about'>Sobre mi</a></li>
        <li><a href='#experience'>Experiencia</a></li>
        <li><a href='#services'>Servicios</a></li>
        <li><a href='#portfolio'>Portafolio</a></li>
        <li><a href='#references'>Referencias</a></li>
        <li><a href='#contact'>Contactos</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com'><FaFacebookF/></a>
        <a href='https://github.com'><FaGithub/></a>
        <a href='https://linkedin.com'><FaLinkedinIn/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Santiago Yambay. Todos los derechos reservados</small>
      </div>
    </footer>
  )
}

export default Footer