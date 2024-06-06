import { Header } from './components/header';
import { Index } from './components/index'
import { Contact } from './pages/contact';
import { Error404 } from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import '@fontsource-variable/onest';



const App = () => {

  return (
    <>
        <Header />
        <main className='contenedor'>
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/home' element={<Index />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<Error404 />} />
            </Routes>
        </main>
    </>
  )
}

export default App;

