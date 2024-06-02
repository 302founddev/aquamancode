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
                    <div className='bTitle'>
                        <h1>Hey, I am jarscode</h1>                        
                        <a
                            href={linkedin} 
                            className='bdg' 
                            target='_blank' 
                            rel='noopener noreferer'>
                                
                            <Badge> Available for hire</Badge>
                        </a>
                    </div>

                    <div>
                        <h3 className='exp'>
                            Passionate about technology.
                            <span className='ylw-900'> Web Developer and Content Creator</span>. 
                            <span className=''>From Madrid, Spain</span>.
                            I specialize in Front-End development,
                            <span className='red-color'> Ethical Hacking, 
                            </span> responsive web design and visual development.
                        </h3>
                    </div>

                <nav className='icons'>
                        <a 
                            href={linkedin} 
                            target='_blank'
                            rel='noopener noreferer'>
                            <CiLinkedin className='icon' />
                            LinkedIn
                        </a>

                        <a  className='span-icon'
                            href={github} 
                            target='_blank'
                            rel="noopener noreferer">
                            <FiGithub className='icon' />
                            Github
                        </a>

                        <a  href='#'
                            target='_blank' 
                            rel='noopener noreferer'>
                            <MdOutlineMarkEmailRead className='icon' />
                            jarscode.dev@outlook.com
                        </a>
                </nav>
            </section>
        </main>
    )
}

