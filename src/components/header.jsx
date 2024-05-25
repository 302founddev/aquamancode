import './header.css';

export const Header = () => {

    return (
        <>
            <nav className="navBar">
                <a href='/'>
                    <span>Juan Alberto</span>
                </a>

                <nav>
                    <a href="/">home</a>
                    <a href="/work">work</a>
                    <a href="/about">about</a>
                    <a href="/contact">contact</a>
                </nav>
            </nav>
        </>
    )
}


