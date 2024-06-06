import './contact.css';

export const Contact = () => {

    return(
        <section>
            <form action="">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" /><br/>
            </form>
            <button type="submit">
                Send
            </button>
        </section>
    )
}