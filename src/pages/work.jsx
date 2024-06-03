import { FaCode } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import './work.css';



export const Work = () => {
    
    return(
        <section id="work">
            <div className="projects">
                <span>
                    <FaCode className="icon2" />
                    <h2>work</h2>
                </span>
                <div className="cont-project">
                    <img src="/src/media/project1.webp" />
                    <div className="type">
                        <h3>SGVL</h3>
                        <ul>
                            <li><FaReact className="react-icon" /> React.js</li>
                            <li><RiTailwindCssLine className="css-icon" /> CSS</li>
                        </ul>
                    </div>
                </div>

                <div className="cont-project">
                    <img src="/src/media/project1.webp" />
                    <div className="type">
                        <h3>SUNTRAVELTOUR</h3>
                        <ul>
                            <li><IoLogoJavascript className="js-icon" /> JavaScript</li>
                            <li><RiTailwindCssLine className="css-icon" /> CSS</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}


