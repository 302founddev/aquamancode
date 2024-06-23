import './about.css';
import { MdOutlineRoundaboutRight } from "react-icons/md";


export const About = () => {
    return (

        <section className='main' id='sobremi'>

            <div className='about'>
                <MdOutlineRoundaboutRight className='about-icon' />
                <h3>Sobre Mí</h3>
            </div>
                
            <span className='content-1'>
                ¡Hola! Soy un desarrollador web apasionado en busca de nuevas oportunidades para crecer y avanzar 
                profesionalmente. Aunque estoy al principio de mi carrera, mi dedicación al aprendizaje continuo y la 
                constante búsqueda de la excelencia me posicionan como un candidato ideal para unirse a su equipo.
            </span>
            <span className='content-1'>
                Siempre estoy buscando nuevas formas de mejorar mis habilidades y expandir mis conocimientos en desarrollo web. Mi enfoque 
                es aprender de cada experiencia y desafío, aprovechando cada oportunidad para mejorar y realizar contribuciones 
                significativas.
                
                Estoy emocionado por la posibilidad de trabajar en proyectos innovadores y colaborar con otros 
                profesionales de la industria.
            </span>
        </section>
    )
}

