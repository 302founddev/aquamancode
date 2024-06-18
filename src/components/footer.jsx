import './footer.css';

export const Footer = () => {
    return (

        <footer className="footer">
            <div>
                <span>© 2023 <a href="https://www.jarscode.dev/" target='_blank'>jarscodedev</a>. All Rights Reserved.</span>
                <ul className="footer-ul">
                    <li>
                        <a href="#" className="footer-links">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="footer-links">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}

