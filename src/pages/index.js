import './index.css';
import Badge from 'react-bootstrap/Badge';


export const Home = () => {

    return (
        <main>
            <section className='section'>
                <h1>Hey, I am jarscode 
                <a
                    className='badge'
                    href='https://www.linkedin.com/in/jarscodedev/' 
                    >
                    <Badge> Available for hire</Badge>
                </a>
                </h1>
                <h2>
                    +15 years experience. Web Developer and Content Creator. 
                    From Madrid, Spain. I specialize in UI design, responsive web desing and visual development.
                </h2>
                </section>
        </main>
    )
}

