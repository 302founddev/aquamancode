import './index.css';
import Badge from 'react-bootstrap/Badge';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";


export const Home = () => {

    let linkedin = "https://linkedin.com/in/jarscodedev";
    let github = "https://github.com/jarscodedev";

    return (
        <main>
            <section className='section'>
                <div className='container'>
                    <h1>Hey, I am jarscode 
                        <a href={linkedin} className='bdg' target='_blank' rel='noopener noreferer'>
                            <Badge> Available for hire</Badge>
                        </a>
                    </h1>
                    <h3 className='exp'>
                        +15 years experience.
                        <span className='ylw-900'> Web Developer and Content Creator</span>. From Madrid, Spain.
                        I specialize in UI design, responsive web design and visual development. Passionate about technology.
                    </h3>
                </div>

                <nav className='icons'>
                    <span className='span-icon'>
                        <FaLinkedin className='icon' />
                        <a 
                            href={linkedin} 
                            target='_blank'
                            rel='noopener noreferer'>
                            LinkedIn
                        </a>
                    </span>

                    <span className='span-icon'>
                        <FaGithub className='icon' />
                        <a 
                            href={github} 
                            target='_blank' 
                            rel="noopener noreferer">
                            Github
                        </a>
                    </span>

                    <span className='span-icon'>
                        <RiMailSendFill className='icon' />
                        <a  href='#'
                            target='_blank' 
                            rel='noopener noreferer'>
                            Contact Me
                        </a>
                    </span>
                </nav>
            </section>
        </main>
    )
}

