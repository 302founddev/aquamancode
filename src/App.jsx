import { Header } from './components/header';
import { Home } from './components/home'
import { Contact } from './pages/contact';
import { Error404 } from './pages/NotFound';
import { Work } from './pages/Projects';
import { Route, Routes } from 'react-router-dom';
import '@fontsource-variable/onest';
import './main.css';


const App = () => {

  return (
    <main>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/work' element={<Work />} />
            <Route path='*' element={<Error404 />} />
        </Routes>
    </main>
  )
}

export default App;

