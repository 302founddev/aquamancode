import './header.css';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";


export const Header = () => {

    return (
        <>
            <section className="navBar">
                <div className='buttons'>
                    <button href='/'>
                        <span><MdDarkMode /></span>
                    </button>
                    <button>
                        <span><MdLightMode /></span>
                    </button>
                </div>

                <nav>
                    <a href="/">home</a>
                    <a href="/work">work</a>
                    <a href="/about">about</a>
                    <a href="/contact">contact</a>
                </nav>
            </section>
        </>
    )
}


