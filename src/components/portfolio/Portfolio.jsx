import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.jpg";

const cardContent = [
  {
    id: 1,
    image: IMG1,
    title: "Implementación recorrido de árboles JS",
    github: "https://github.com/Santiago-Yambay/RecorridoNodosJS",
    demo: "https://github.com/Santiago-Yambay/RecorridoNodosJS",
  },
  {
    id: 2,
    image: IMG2,
    title: "Artefactos custom de kubernets para deploy",
    github: "https://github.com/Santiago-Yambay/Kubernets",
    demo: "https://github.com/Santiago-Yambay/Kubernets",
  },
  {
    id: 3,
    image: IMG3,
    title: "Gestor de usuarios con componentes funcionales                          ",
    github: "https://github.com/Santiago-Yambay/gestor-usuarios",
    demo: "https://github.com/Santiago-Yambay/gestor-usuarios",
  },
  {
    id: 4,
    image: IMG4,
    title: "Creación de pipelines para mf y ms usando kubernets",
    github: "https://github.com/Santiago-Yambay/Jenkins",
    demo: "https://github.com/Santiago-Yambay/Jenkins",
  },
  {
    id: 5,
    image: IMG5,
    title: "Carro de compras con react con componentes basados en clases",
    github: "https://github.com/Santiago-Yambay/carro-de-compras",
    demo: "https://github.com/Santiago-Yambay/carro-de-compras",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Trabajos recientes</h5>
      <h2>Portafolio</h2>

      <div className="container portfolio__container">
        {cardContent.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image"></div>
              <img src={image} alt={title}></img>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
