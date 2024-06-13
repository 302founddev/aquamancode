import { Github, DeveloperStudentClub } from '../components/icons.jsx';
import './projects.css';
import { FaCode } from "react-icons/fa";


// ReactIcon, JavaScript, CSS, 

export const Work = () => {

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
            tags: ['Javascript', 'CSS']
        }
    ]



    return (
        <>
            <section className='section-cont'>
                <div className='title'>
                    <FaCode className='both-icons' />
                    <h3>work</h3>
                </div>
                {WORKS.map((work, index) => ( // Aquí agregué paréntesis para envolver el retorno de la función de flecha
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
                                    className="p-links"
                                    href="github.com"
                                    target="_blank"
                                >
                                    <Github />Code
                                </a>
                                <a 
                                    className="p-links"
                                    href="website.com"
                                    target="_blank"
                                >
                                    <DeveloperStudentClub />Preview
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </section>
        </>
    )
}
