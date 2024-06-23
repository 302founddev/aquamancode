import { Header } from './components/header';
import { Home } from './components/home'
import { Contact } from './pages/contact';
import { Error404 } from './pages/NotFound';
import { Work } from './pages/Projects';
import { Footer } from './components/footer';
import { Route, Routes } from 'react-router-dom';
import '@fontsource-variable/onest';
import '@fontsource-variable/grandstander';
import './main.css';


const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/initio' element={<Home />} />
        <Route path='/contacto' element={<Contact />} />
        <Route path='/proyectos' element={<Work />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <main>
        <Header />
        <Footer />
      </main>
    </>
  )
}

export default App;

