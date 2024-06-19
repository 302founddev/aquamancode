import { Github, DeveloperStudentClub } from '../components/icons.jsx';
import './projects.css';
import { FaCode } from "react-icons/fa";
import crypto from 'crypto'; // Importa el módulo crypto para usar randomUUID

export const Work = () => {

    const PROJECTS = [
        {
            title: "Suntraveltour - Es una Pre-landing page de una agencia de viajes",
            description: "Biblioteca de logos SVG de las marcas más populares. Más de 10k visitas al mes y más de 2K SVGs descargados. Creado desde cero con Next.js, React y Tailwind CSS.",
            link: "#",
            github: "https://github.com/tuusuario/repositorioGithub",
            image: "../../public/projects/cap.webp",
            tags: ['Javascript', 'CSS'],
            live: false
        },
        {
            title: "Fetchrick - Consume una API y muestra los datos por pantalla",
            description: "Biblioteca de logos SVG de las marcas más populares. Más de 10k visitas al mes y más de 2K SVGs descargados. Creado desde cero con Next.js, React y Tailwind CSS.",
            link: "#",
            github: "https://github.com/tuusuario/otroRepositorio",
            image: "../../public/projects/cap.webp",
            tags: ['ReactJS', 'CSS'],
            live: true
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
                                    <Github /> Fuente
                                </a>
                                {/* Ejemplo para el enlace de vista previa */}
                                <a className="p-links" href={work.link} target="_blank" rel="noopener noreferrer">
                                    <DeveloperStudentClub /> Vista Previa
                                </a>
                            </div>
                        ) : 
                        <div className="links">
                            <a className="p-links" href={work.github} target="_blank" rel="noopener noreferrer">
                            <Github /> Fuente
                            </a>
                            {/* Ejemplo para el enlace de vista previa */}
                        </div>}

                    </div>
                </article>
            ))}
        </section>
    );
};

