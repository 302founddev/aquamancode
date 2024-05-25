import { Header } from './components/header';
import { Home } from './components/index'
import { Work } from './pages/work';
import { About } from './components/about';
import { Footer } from './components/footer';
import '@fontsource-variable/onest';


const App = () => {

  return (
    <>
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
      </head>
					
      <section>
          <Header />
          <div className='contenedor'>
              <Home />
              <Work />
              <About />
              <Footer />
          </div>
      </section>
    </>
  )
}

export default App;
