import './header.css';

export const Header = () => {

    return (
        <>
            <header className="header">
                <a href='/'>
                    <span>Juan Alberto</span>
                </a>

                <nav>
                    <a href="/">Home</a>
                    <a href="/work">work</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </nav>
            </header>
        </>
    )
}


