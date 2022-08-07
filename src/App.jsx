// dependencies
import { Routes, Route } from 'react-router-dom'

// styles
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Styles/App.module.scss'

// components
import Navbar from './Components/Navbar/Navbar'

// views
import Listing from './Views/Listing'
import Pokedex from './Views/Pokedex'
import Pokemon from './Views/Pokemon'
import NotFound from './Views/NotFound'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Listing /> } />
        <Route path="/pokedex" element={ <Pokedex /> } />
        <Route path="/pokemon/:id" element={ <Pokemon /> } />
        {/* tout autre route qui n'existe pas encore renvoie vers une page erreur 404 */}
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </div>
  )
}

export default App
