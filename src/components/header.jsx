import './header.css';

import { MdLightMode } from "react-icons/md";
import { Link } from 'react-router-dom';


export const Header = () => {

    const scrollToChange = () => {
        window.addEventListener('scroll', ()=>{
            let header = document.getElementsByClassName("navbar");
            header.classList.toggle("sticky", window.screenY > 0)
        })
    }

    return (
        <>
            <nav className='navbar'>
                <span>
                    <a href='/'><h2>Juan Alberto</h2></a>
                </span>

                <ul>
                    <li><Link to="/projectos">Proyectos</Link></li>
                    <li><a href="/#sobremi">Sobre mí</a></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                    <li><button className='light-dark'><MdLightMode /></button></li>
                </ul>
            </nav>
        </>
    )
}


