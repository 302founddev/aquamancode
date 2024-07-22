import './notfound.css';

export const Error404 = ()=> {

    return (
        <main>
            <div className="error">
                <h2>Página no encontrada.</h2>
                <img src="./src/components/images/404-not-found.svg" alt="404 not found" />
            </div>
        </main>
    )
}

export default Error404;