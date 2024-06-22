import './footer.css';

export const Footer = () => {
    return (

        <footer className="footer">
            <div>
                <span>© 2023 <a href="https://www.jarscode.dev/" target='_blank'> jarscodedev</a>. Casi todos los derechos reservados.</span>
                <span className="footer-span">
                    <a href="/#sobremi" className="footer-link">Sobre mí</a>
                    <a href="/contacto" className="footer-link">Contacto</a>
                </span>
            </div>
        </footer>

    )
}


