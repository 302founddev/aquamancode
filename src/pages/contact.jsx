import "./contact.css";

export const Contact = () => {


    const handleSubmit = () => {
        alert("Hello World!")
    }

    return(
        <section className="contact-form">
            <form>
                <label htmlFor="name">Nombre <input id="nombre" type="text" placeholder="Nombre" required /></label><br />
                <label htmlFor="apellido">Apellido <input id="apellido" type="text" placeholder="Apellido" required /></label><br />
                <label htmlFor="email">Email <input type="email" id="email" placeholder="Email" required /></label><br />
                <label htmlFor="asunto">Asunto <input type="text" id="asunto" placeholder="Asunto" required /></label><br />
                <label htmlFor="mensaje">Mensaje <textarea type="text" id="mensaje" placeholder="Mensaje" required /></label><br />
            </form>

            <button type="submit" onSubmit={handleSubmit}>
                Enviar
            </button>

        </section>
    )
}


