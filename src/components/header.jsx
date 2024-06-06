import './header.css';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { Link } from 'react-router-dom';


export const Header = () => {

    return (
        <>
            <section className="navBar">
                <nav>
                    <div className='light-dark'>
                        <span><MdDarkMode /></span>
                        <span><MdLightMode /></span>
                    </div>

                    <Link to="/">home</Link>
                    <a href="#work">work</a>
                    <a href="#about">about</a>
                    <Link to="contact">contact</Link>
                </nav>
            </section>
        </>
    )
}


