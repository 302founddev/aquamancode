import './footer.css';

export const Footer = () => {
    return (

        <footer className="footer">
            <div>
                <span className='footer-span'>© 2023 <a href="https://www.jarscode.dev/" target='_blank'> jarscode</a>. Casi todos los derechos reservados.</span>
                <span className='footer-span gap'>
                    <a href="/#sobremi" className="footer-link">Sobre mí</a>
                    <a href="mailto:jarscode.dev@outlook.com" className="footer-link">Contacto</a>
                </span>
            </div>
        </footer>

    )
}


