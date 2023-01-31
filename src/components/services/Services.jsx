import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>Mis servicios</h5>
      <h2>Servicios</h2>

      <div className="container service__container">


        <article className="service">
          <div className="service__head">
            <h3>Diseño de UI/UX</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                Maquetación y creación de interfaces de usuario                
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                Uso de frameworks de UX como tailwind
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                Look and feel de aplicaciones web.
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                Creación de estilos siguiendo una línea de diseño
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                Creación de componentes genéricos optimizados
                </p>
              </li>
        
            </ul>
          
        </article>


        <article className="service">
          <div className="service__head">
            <h3>Backend</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                Diseño de base de datos                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                Uso de frameworks de backend como Nest, NextJS y NodeJS.
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                Optimización en la parte de consumo de los datos
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                Creación de servicios
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                Manipulación de datos a gran escala
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                Conocimiento en procesos de migración de datos
                </p>
              </li>
              
            </ul>
          
        </article>


        <article className="service">
          <div className="service__head">
            <h3>Infraestructuras informáticas </h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                Creación e implementación de kubernetes en proyectos  
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                Uso y creación de artefactos yaml para el despliegue de aplicaciones en un cluster
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                Gestión de recursos en un cluster
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                Implementación de arquitecturas en proyectos
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                Despliegue de aplicaciones por medio de pipelines
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                Dockerizar aplicaciones
                </p>
              </li>
              
            </ul>
          
        </article>

        
      </div>
    </section>
  );
};

export default Services;
