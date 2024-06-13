import './header.css';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { Link } from 'react-router-dom';


export const Header = () => {

    return (
        <>
            <nav className='navbar'>
                <span>
                    <Link to="/home"><h3>Juan Alberto</h3></Link>
                </span>

                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="work">work</Link></li>
                    <li><a href="#about">about</a></li>
                    <li><Link to="contact">contact</Link></li>
                    <li><button className='light-dark'><MdLightMode /></button></li>
                </ul>
            </nav>
        </>
    )
}


