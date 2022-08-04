import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import styles from '../../Styles/Navbar.module.scss'


const Navbar = () => {

    const favorites = useSelector((state) => state.favorites);

    return (
    <nav className={ `navbar navbar-expand-md ${ styles.nav }` }>
        <div className="container-fluid">
            
                
                <div className="navbar-collapse collapse d-flex justify-content-between">

                    <ul className={ `navbar-nav` }>
                        <li className="nav-item">
                            <NavLink
                                    to="/"
                            >Pokémon national</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                    to="/pokedex"
                            >Pokédex personnel</NavLink>
                        </li>
                        <li className="nav-item">{ favorites.length }</li>
                    </ul>

                </div>

            

        </div>
    </nav>
    )
}

export default Navbar
