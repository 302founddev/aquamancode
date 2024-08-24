import './home.css';
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { Work } from '../pages/Projects';
import { About } from './about';
import { Experiencia } from './experience';


export const Home = (props) => {
    const links = {
        linkedin: "https://linkedin.com/in/aquamancode",
        github: "https://github.com/aquamancode",
        mail: "mailto:jarscode.dev@outlook.com"
    }

    return (
        <main>
            <section className='presentation'>
                <div className='b-title'>
                    <span>
                        <a
                            href={links.linkedin} 
                            className='bdg' 
                            target='_blank' 
                            rel='noopener'>
                                
                            <span> Disponible para trabajar </span>
                        </a>
                    </span>
                    <h1>Hey, soy Juan Alberto</h1> 
                </div>

                <div className='description-container'>
                    <span className='description'>
                        Apasionado por la tecnología &
                        <span className='ylw-900'> desarrollador web </span>
                        <span> desde Madrid, España 🇪🇸</span>.
                        Me especializo en desarrollo de software Front-End, tengo amplios conocimientos de 
                        <span className='red-color'> Hacking Ético, </span>
                          diseño web responsivo & desarrollo visual.
                    </span>
                </div>

                <nav className='icons'>
                    <a 
                        href={links.linkedin} 
                        target='_blank'
                        rel='noopener noreferer'>
                        <CiLinkedin className='icon' />
                        LinkedIn
                    </a>


                    <a 
                        href={links.mail}>
                        <MdOutlineMarkEmailRead className='icon' />
                        Contáctame
                    </a>
                </nav>

                <Experiencia />
 
                <Work />
                
                <About />
            </section>

        </main>
    )
}

