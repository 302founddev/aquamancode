import { FaCode } from "react-icons/fa6";
import { ReactIcon, JavaScript, CSS, Github, DeveloperStudentClub } from './icons.jsx';
import './projects.css';


export const Projects = () => {

    const WORKS = [
        {
            title: "FETCHRICK - A simple application that makes requests to an API",
            description: "Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS.",
            link: "#",
            github: "github.com",
            image: "../../public/projects/cap.webp",
            tags: ['React', 'Javascript', 'CSS']
        },
        {
            title: "FETCHRICK - A simple application that makes requests to an API",
            description: "Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS.",
            link: "#",
            github: "github.com",
            image: "../../public/projects/cap.webp",
            tags: ['React', 'Javascript', 'CSS']
        }
    ]
        
    return (
        <>
            {
                WORKS.map((work, index) => ( // Aquí agregué paréntesis para envolver el retorno de la función de flecha
                    <article key={`work-${index}`}> {/* Añadí un key único */}
                        <img src={work.image} alt={`Project screenshot ${work.title}`} /> {/* Cambié work.image por work.title para hacer el alt más descriptivo */}
                        <div>
                            <h3>{work.title}</h3>
                            <ul className="tag-container">
                                {work.tags.map((tag, index) => ( // Itera sobre las etiquetas y muestra cada una
                                    <li key={`tag-${index}`}>{tag}</li>
                                ))}
                            </ul>
                            <p>{work.description}</p>
                            <div className="links">
                                <a 
                                    href="github.com"
                                    target="_blank"
                                >
                                    <Github />Code
                                </a>
                                <a 
                                    href="website.com"
                                    target="_blank"
                                >
                                    <DeveloperStudentClub />Preview
                                </a>
                            </div>
                        </div>
                    </article>
                ))
            }
        </>
    )
}
