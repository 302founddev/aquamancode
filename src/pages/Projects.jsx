import './projects.css';
import { Github, DeveloperStudentClub } from '../components/icons.jsx';
import { FaCode } from "react-icons/fa";


export const Work = () => {

  const PROJECTS = [
    {
      title: "Sol Traveltour - Web de reservas para una agencia de viajes.",
      description: "Agencia como puerta de entrada a aventuras globales inolvidables, ofreciendo experiencias personalizadas que transforman cada viaje en una experiencia única.",
      link: "https://soltraveltour-agency.vercel.app",
      github: "https://github.com/4quacode/soltraveltour-agency.git",
      image: "/soltraveltour-agency.webp",
      live: true
    },
    {
      title: "Aquamancode web portfolio - Portfolio personal construido en react.",
      description: "Esta es mi carta de presentación para que me conozcan y conozcan el trabajo que estoy realizando. Mejoras en camino...",
      link: "https://aquamancode.vercel.app",
      github: "https://github.com/4quacode/4quacode-homepage.git",
      image: "/aquamancode.webp",
      live: true
    },
    {
      title: "fetchrickandmorty - Consume una api y muestra sus datos.",
      description: "Web diseñada para consumir una API con los personajes de Rick and Morty, de uso practico donde se muestran diferentes tipos de datos sobre los personajesl.",
      link: "https://fetchrickandmorty.vercel.app",
      github: "https://github.com/4quacode/fetchrickandmorty.git",
      image: "/fetchrick.svg",
      live: true
    }
  ];

  return (
    <section className='section'>
      <div className='title' id='proyectos'>
        <FaCode className='project-icon' />
        <h3>Proyectos</h3>
      </div>
      {PROJECTS.map((work, index) => (
        <article key={`work-${index}`}>
          <div>
            <img src={work.image} alt={`Captura de pantalla del proyecto ${work.title}`} />
          </div>
          <div>
            <h3>{work.title}</h3>

            <p>{work.description}</p>

            {work.live ? (
              <div className="links">
                <a className="p-links" href={work.github} target="_blank" rel="noopener noreferrer">
                  <Github /> Source
                </a>
                <a className="p-links" href={work.link} target="_blank" rel="noopener noreferrer">
                  <DeveloperStudentClub /> Preview
                </a>
              </div>
            ) :
              <div className="links">
                <a className="p-links" href={work.github} target="_blank" rel="noopener noreferrer">
                  <Github /> Source
                </a>
                <a className="p-links" href={work.link} target="_blank" rel="noopener noreferrer">
                  <DeveloperStudentClub /> Preview
                </a>
              </div>}

          </div>
        </article>
      ))}
    </section>
  );
};

