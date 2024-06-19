import './home.css';
import Badge from 'react-bootstrap/Badge';
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { Work } from '../pages/Projects';
import { About } from './about';


export const Home = () => {
    const links = {
        linkedin: "https://linkedin.com/in/jarscodedev",
        github: "https://github.com/jarscodedev"
    }



      

    return (
        <main>
            <section className='presentation'>
                <div className='b-title'>
                    <h1>Hey, soy jarsdev</h1> 
                    <a
                        href={links.linkedin} 
                        className='bdg' 
                        target='_blank' 
                        rel='noopener'>
                            
                        <Badge> Disponible para trabajar</Badge>
                    </a>
                </div>

                <div>
                    <h3 className='exp'>
                        Apasionado por la tecnología.
                        <span className='ylw-900'>Desarrollador web & creador de contenido</span>, 
                        <span className=''> Desde Madrid, Spain</span>.
                        Me especializo en desarrollo Front-End,
                        <span className='red-color'> Hacking Ético
                        </span> & diseño web responsivo & desarrollo visual.
                    </h3>
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
                        href={links.github} 
                        target='_blank'
                        rel="noopener">
                        <FiGithub className='icon' />
                        Github
                    </a>

                    <a 
                        id='text-to-copy'>
                        <MdOutlineMarkEmailRead className='icon' />
                        jarscode.dev@outlook.com
                    </a>
                </nav>
            </section>

            <section>
                <Work />
            </section>

            <section id='about'>
                <About />
            </section>

        </main>
    )
}

