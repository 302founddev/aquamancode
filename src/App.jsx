import { Header } from './components/header';
import { Index } from './components/index'
import { Contact } from './pages/contact';
import { Error404 } from './pages/NotFound';
import { Work } from './pages/Projects';
import { Footer } from './components/footer';
import { Route, Routes } from 'react-router-dom';
import '@fontsource-variable/onest';



const App = () => {

  return (
    <main>
        <Header />
        <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/home' element={<Index />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/work' element={<Work />} />
            <Route path='*' element={<Error404 />} />
        </Routes>
        <section id='footer'>
            <Footer />
        </section>
    </main>
  )
}

export default App;

