import './header.css';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";


export const Header = () => {

    return (
        <>
            <section className="navBar">
                <nav>
                    <div className='light-dark'>
                        <span><MdDarkMode /></span>
                        <span><MdLightMode /></span>
                    </div>

                    <a href="/">home</a>
                    <a href="/work">work</a>
                    <a href="/about">about</a>
                    <a href="/contact">contact</a>
                </nav>
            </section>
        </>
    )
}


