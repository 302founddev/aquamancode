import { FaCode } from "react-icons/fa6";
import './work.css';


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
                </div>
            </div>
        </section>
    )
}

