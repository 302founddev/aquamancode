import "./contact.css";

export const Contact = () => {


    const handleSubmit = () => {
        alert("Hello World!")
    }

    return(
        <section className="contact-form">
            <form>
                <label htmlFor="name">Name <input id="name" type="text" placeholder="Name" required /></label><br />
                <label htmlFor="lastname">Last Name <input id="lastname" type="text" placeholder="Last Name" required /></label><br />
                <label htmlFor="email">Email <input type="email" id="email" placeholder="Email" required /></label><br />
                <label htmlFor="affair">Affair <input type="text" id="affair" placeholder="Affair..." required /></label><br />
                <label htmlFor="message">Message <textarea type="text" id="message" placeholder="Message" required /></label><br />
            </form>

            <button type="submit" onSubmit={handleSubmit}>
                Send
            </button>

        </section>
    )
}


