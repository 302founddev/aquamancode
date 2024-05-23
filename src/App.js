import { Header } from './pages/header.js';
import { Home } from './pages/index.js'
import { Work } from './pages/work.js';
import { About } from './pages/about.js';
import { Footer } from './pages/footer.js';
import '@fontsource-variable/onest';


const App = () => {

  return (
    <>
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
      </head>
					
      <div>
          <Header />
          <section className='contenedor'>
              <Home />
              <Work />
              <About />
              <Footer />
          </section>
      </div>
    </>
  )
}

export default App;

