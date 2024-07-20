import "./contact.css";

export const Contact = () => {

    return(
        <div className="container">

            <div>
                <h2>Formulario de contacto</h2>
            </div>

            <form>

                <label htmlFor="fname">Nombre</label>
                <input type="text" id="fname" name="firstname" placeholder="Tu nombre.."></input>

                <label htmlFor="lname">Apellido</label>
                <input type="text" id="lname" name="lastname" placeholder="Tu apellido.."></input>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email.."></input>

                <label htmlFor="cname">Nombre empresa</label>
                <input type="text" id="cname" name="companyname" placeholder="Empresa.."></input>

                <label htmlFor="country">Continente</label>
                <select id="country" name="country">
                    <option value="america">America</option>
                    <option value="europa">Europa</option>
                    <option value="asia">Asia</option>
                    <option value="africa">África</option>
                    <option value="oceania">Oceanía</option>
                    <option value="antartida">Antártida</option>
                </select>

                <label htmlFor="subject">Asunto</label>
                <textarea id="subject" name="subject" placeholder="Escribe algo.."></textarea>

                <input type="submit" value="Enviar"></input>

            </form>
        </div>
    )
}

