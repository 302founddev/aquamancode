import './index.css';
import Badge from 'react-bootstrap/Badge';
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { Work } from '../pages/Projects';
import { About } from './about';


export const Index = () => {

    const links = {
        linkedin: "https://linkedin.com/in/jarscodedev",
        github: "https://github.com/jarscodedev"
    }

    return (
        <main>
            <section className='section'>
                <div className='b-title'>
                    <h1>Hey, I am jarsdev</h1> 
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

            <section>
                <Work />
            </section>

            <section id='about'>
                <About />
            </section>

        </main>
    )
}

