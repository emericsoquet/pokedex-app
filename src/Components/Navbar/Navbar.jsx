import React from 'react'
import { NavLink } from 'react-router-dom'
import Listing from '../../Views/Listing'

const Navbar = () => {
    return (
    <nav>
        <NavLink
                to="/"
        >Pokémon national</NavLink>
        <NavLink
                to="/pokedex"
        >Pokédex personnel</NavLink>
    </nav>
    )
}

export default Navbar
