import './about.css';
import { MdOutlineRoundaboutRight } from "react-icons/md";


export const About = () => {
    return (

        <section className='main'>

            <div className='about'>
                <MdOutlineRoundaboutRight className='both-icons' />
                <h3>About</h3>
            </div>
                
            <span className='content-1'>
                Hello! I am a passionate web developer seeking new opportunities to grow and advance professionally. 
                Though I am at the beginning of my career, my dedication to continuous learning and constant 
                pursuit of excellence position me as an ideal candidate to join your team.
            </span>
            <span className='content-2'>
                I am always seeking new ways to enhance my skills and expand my knowledge in web development. 
                My approach is to learn from every experience and challenge, seizing each opportunity to improve 
                and make meaningful contributions. I am excited about the possibility of working on innovative 
                projects and collaborating with other industry professionals.
            </span>
        </section>
    )
}

