import { FaCode } from "react-icons/fa6";
import './work.css';
import { FaReact } from "react-icons/fa6";



export const Work = () => {
    
    return(
        <section>
            <div className="projects">
                <span>
                    <FaCode className="icon2" />
                    <h2>work</h2>
                </span>
                <div className="cont-project">
                    <img src="/src/media/project1.png" />
                    <div className="type">
                        <h3>SGVL</h3>
                        <ul>
                            <li><FaReact className="react-icon" />React</li>
                            <li className="css-icon">CSS</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

