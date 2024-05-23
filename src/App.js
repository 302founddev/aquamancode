import { Header } from './components/header.js';
import { Home } from './pages/index.js'
import { Work } from './pages/work.js';
import '@fontsource-variable/onest';


const App = () => {

  return (
    <>
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
      </head>
					
      <div className="head position-absolute start-0 top-0 w-100 h-100">
          <Header />
          <Home />
          <Work />
      </div>
    </>
  )
}

export default App;

