import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  //Hook para el formulario 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5shtrrc', 'template_tce76c7', form.current, 'BAwjkEDlBIXeKGt2M')
  
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Ponte en contacto</h5>
      <h2>Contactame!</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>santiagomino9@gmail.com</h5>
            <a href='mailto:santiagomino9@gmail.com' target="__blank">Enviar un mensaje</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Santiago Yambay</h5>
            <a href='https://m.me/santiago.yambay.1' target="__blank">Enviar un mensaje</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>0984455991</h5>
            <a href='https://api.whatsapp.com/send?phone=0984455991' target="__blank">Enviar un mensaje</a>
          </article>
        </div>

        {/** Fin de la seccion de contactos */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Nombre' required></input>
          <input type='email' name='email' placeholder='Email' required></input>
          <textarea name='message' rows='7' placeholder='Mensaje' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar Mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default Contact