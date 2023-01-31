import React from 'react'
import './about.css'
import ME from '../../assets/foto2.png'
import { MdWork } from 'react-icons/md'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Acerca de mi</h5>
      <h2>Conoceme</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About image'></img>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <MdWork className='about__icon' />
              <h5>Experiencia</h5>
              <small>+1 Año Trabajando</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clientes</h5>
              <small>Varios Clientes</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Proyectos</h5>
              <small>+10 Proyectos Completados</small>
            </article>
          </div>

          <p>Soy un desarrollador full-stack que ha trabajado con varias tecnologías como ReactJS y TS, NodeJS, Nest y Springboot, y se encuentra acabando la carrera en la actualidad, además de todo lo antes dicho me gusta mucho la cultura DevOps y como se maneja el marco de trabajo en el ámbito profesional el uso de orquestadores y como se maneja el flujo de trabajo en todas las etapas del desarrollo del software, además de ser un entusiasta de la computación en la nube.</p>
          <a href='#contact' className='btn btn-primary'>Hablemos!</a>
        </div>
      </div>
    </section>
  )
}

export default About