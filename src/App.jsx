// dependencies
import { useState } from 'react'
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
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Listing /> } />
        <Route path="/pokedex" element={ <Pokedex /> } />
        <Route path="/pokemon/:id" element={ <Pokemon /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </div>
  )
}

export default App
