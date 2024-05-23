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
                <div>
                    <h1>Hey, I am jarscode 
                        <a href={linkedin} className='bdg' target='_blank' rel='noopener noreferer'>
                            <Badge> Available for hire</Badge>
                        </a>
                    </h1>
                    <p>
                        +15 years experience.
                        <span className='ylw-900'> Web Developer and Content Creator</span>. From Madrid, Spain.
                        I specialize in UI design, responsive web design and visual development.
                    </p>
                </div>

                <nav className='icons'>
                    <span>
                        <a 
                            href={linkedin} 
                            target='_blank'
                            rel='noopener noreferer'>
                                <FaLinkedin className='icon' />
                            LinkedIn
                        </a>
                    </span>
                    <span>
                        <a 
                            href={github} 
                            target='_blank' 
                            rel="noopener noreferer">
                                <FaGithub className='icon' />
                            Github
                        </a>
                    </span>
                    <span>
                        <a  href='#'
                            target='_blank' 
                            rel='noopener noreferer'>
                                <RiMailSendFill className='icon' />
                            jarscode.dev@outlook.com
                        </a>
                    </span>
                </nav>
            </section>
        </main>
    )
}

