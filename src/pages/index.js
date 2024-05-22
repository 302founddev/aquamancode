import './index.css';
import Badge from 'react-bootstrap/Badge';
import { IconGithub } from '../icons/GitHub';
import { IconLinkedin } from '../icons/LinkedIn';


export const Home = () => {

    let linkedin = "https://linkedin.com/in/jarscodedev";
    let github = "https://github.com/jarscodedev";

    return (
        <main>
            <section className='section'>
                <div>
                    <h1>Hey, I am JarsCode 
                        <a className='fs-6' href={linkedin}>
                            <Badge> Available for hire</Badge>
                        </a>
                    </h1>
                    <p>
                        +15 years experience.
                        <span className='ylw-900'> Web Developer and Content Creator</span>. From Madrid, Spain.
                        I specialize in UI design, responsive web design and visual development.
                    </p>
                </div>

                <ul className='icons'>
                    <li>
                        <a href={linkedin}><IconLinkedin className='icon' /></a>
                    </li>
                    <li>
                        <a href={github}><IconGithub className='icon' /></a>
                    </li>
                </ul>
            </section>
        </main>
    )
}

