import './index.css';
import Badge from 'react-bootstrap/Badge';
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";


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
                    <h3 className='exp'>
                        +15 years experience.
                        <span className='ylw-900'> Web Developer and Content Creator</span>. From Madrid, Spain.
                        I specialize in UI design, responsive web design and visual development. Passionate about technology.
                    </h3>
                </div>

                <nav className='icons'>
                    <span className='span-icon'>
                        <CiLinkedin className='icon' />
                        <a 
                            href={linkedin} 
                            target='_blank'
                            rel='noopener noreferer'>
                            LinkedIn
                        </a>
                    </span>

                    <span className='span-icon'>
                        <FiGithub className='icon' />
                        <a 
                            href={github} 
                            target='_blank' 
                            rel="noopener noreferer">
                            Github
                        </a>
                    </span>

                    <span className='span-icon'>
                        <MdOutlineMarkEmailRead className='icon' />
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

