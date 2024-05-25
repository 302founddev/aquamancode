import './about.css';
import { FcAbout } from "react-icons/fc";


export const About = () => {
    return (

        <section className='main'>
            <span>
                <FcAbout className='icon3'/>
                <h2 className='about-h2'>About me</h2>
            </span>
            <span className='content-1'>
                ¡Hola! Soy un apasionado programador web en busca de nuevas oportunidades
                 para crecer y desarrollarme profesionalmente. 
                Aunque estoy al inicio de mi carrera profesional, mi dedicación al 
                aprendizaje continuo y mi búsqueda constante de la excelencia me posicionan 
                como un candidato ideal para formar parte de tu equipo. 
            </span>
            <span className='content-2'>
                Estoy constantemente buscando nuevas formas de mejorar mis habilidades y expandir 
                mi conocimiento en el desarrollo web.
                Mi enfoque es siempre aprender de cada experiencia y desafío, aprovechando cada oportunidad para mejorar
                y contribuir de manera significativa. Estoy emocionado por la posibilidad de trabajar en proyectos innovadores
                y colaborar con otros profesionales del sector.
            </span>
        </section>
    )
}

