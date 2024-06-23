import { Github, DeveloperStudentClub } from '../components/icons.jsx';
import './projects.css';
import { FaCode } from "react-icons/fa";
import crypto from 'crypto'; // Importa el módulo crypto para usar randomUUID

export const Work = () => {

    const PROJECTS = [
        {
            title: "Suntraveltour - Una pre-landing page de una agencia de viajes",
            description: "Agencia como puerta de entrada a aventuras globales inolvidables, ofreciendo experiencias personalizadas que transforman cada viaje en una experiencia única.",
            link: "https://www.soltraveltour.es",
            github: "https://github.com/jarscodedev/suntraveltour.git",
            image: "../../public/projects/suntraveltour.webp",
            tags: ['Javascript', 'Css'],
            live: true
        },
        {
            title: "FETCHRICKMORTY - Consume una API y muestra los datos",
            description: "Biblioteca de logos SVG de las marcas más populares. Más de 10k visitas al mes y más de 2K SVGs descargados. Creado desde cero con Next.js, React y Tailwind CSS.",
            link: "#",
            github: "https://github.com/jarscodedev/fetchapi_rickandmorty.git",
            image: "../../public/projects/fetchrick.webp",
            tags: ['React.js', 'Css'],
            live: false
        }
    ];

    return (
        <section className='section-cont'>
            <div className='title'>
                <FaCode className='project-icon' />
                <h3>Proyectos</h3>
            </div>
            {PROJECTS.map((work, index) => (
                <article key={`work-${index}`}>
                    <img src={work.image} alt={`Captura de pantalla del proyecto ${work.title}`} />
                    <div>
                        <h3>{work.title}</h3>
                        <ul className="tag-container">
                            {work.tags.map((tag, index) => (
                                <li key={`tag-${index}`}>{tag}</li>
                            ))}
                        </ul>

                        <p>{work.description}</p>

                        {/* Renderización condicional basada en `work.live` */}
                        {work.live ? (
                            <div className="links">
                                <a className="p-links" href={work.github} target="_blank" rel="noopener noreferrer">
                                    <Github /> Source
                                </a>
                                {/* Ejemplo para el enlace de vista previa */}
                                <a className="p-links" href={work.link} target="_blank" rel="noopener noreferrer">
                                    <DeveloperStudentClub /> Preview
                                </a>
                            </div>
                        ) : 
                        <div className="links">
                            <a className="p-links" href={work.github} target="_blank" rel="noopener noreferrer">
                            <Github /> Source
                            </a>
                        </div>}

                    </div>
                </article>
            ))}
            <div className='vermas'>
                <a href='/proyectos'>Saber más </a>
            </div>
        </section>
    );
};

