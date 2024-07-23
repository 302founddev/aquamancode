import './header.css';


export const Header = () => {

    const mailto = "mailto:jarscode.dev@outlook.com"

    return (
        <>
            <nav className='navbar'>
                <ul>
                    <li><a href="/#experiencia">Experiencia</a></li>
                    <li><a href="/#proyectos">Proyectos</a></li>
                    <li><a href="/#sobremi">Sobre mí</a></li>
                    <li><a href={mailto}>Contacto</a></li>
                </ul>
            </nav>
        </>
    )
}

