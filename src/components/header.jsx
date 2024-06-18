import './header.css';

import { MdLightMode } from "react-icons/md";
import { Link } from 'react-router-dom';


export const Header = () => {

    return (
        <>
            <nav className='navbar'>
                <span>
                    <a href='/'><h3>Juan Alberto</h3></a>
                </span>

                <ul>
                    <li><Link to="/home">home</Link></li>
                    <li><Link to="/work">work</Link></li>
                    <li><a href="/#about">about</a></li>
                    <li><Link to="/contact">contact</Link></li>
                    <li><button className='light-dark'><MdLightMode /></button></li>
                </ul>
            </nav>
            {
                window.addEventListener('scroll', ()=>{
                    let header = document.getElementsByClassName("navbar");
                    header.classList.toggle("sticky", window.screenY > 0)
                })
            }
        </>
    )
}


