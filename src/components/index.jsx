import './index.css';
import Badge from 'react-bootstrap/Badge';
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { Projects } from './Projects';
import { About } from './about';
import { Footer } from './footer';
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { FaCode } from "react-icons/fa";



export const Index = () => {

    const links = {
        linkedin: "https://linkedin.com/in/jarscodedev",
        github: "https://github.com/jarscodedev"
    }

    return (
        <main>
            <section className='section'>
                    <div className='bTitle'>
                        <h1>Hey, I am jarscode</h1> 
                        <a
                            href={links.linkedin} 
                            className='bdg' 
                            target='_blank' 
                            rel='noopener'>
                                
                            <Badge> Available for hire</Badge>
                        </a>
                    </div>

                    <div>
                        <h3 className='exp'>
                            Passionate about technology.
                            <span className='ylw-900'> Web Developer and Content Creator</span>. 
                            <span className=''>From Madrid, Spain</span>.
                            I specialize in Front-End development,
                            <span className='red-color'> Ethical Hacking
                            </span> and responsive web design and visual development.
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

            <section id='work'>
                <div>
                    <FaCode className='both-icons' />
                    <h3>work</h3>
                </div>
                <Projects />
            </section>

            <section id='about'>
                <div>
                    <MdOutlineRoundaboutRight className='both-icons' />
                    <h3>'bout</h3>
                </div>
                <About />
            </section>
            
            <section id='footer'>
                <Footer />
            </section>

        </main>
    )
}

