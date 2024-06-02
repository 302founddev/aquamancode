import { Header } from './components/header';
import { Home } from './components/index'
import { Work } from './pages/work';
import { About } from './components/about';
import { Footer } from './components/footer';
import '@fontsource-variable/onest';


const App = () => {

  return (
    <>
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
