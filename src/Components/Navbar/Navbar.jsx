import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from '../../Styles/Navbar.module.scss'

const Navbar = () => {
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
                    </ul>

                    <form role="search" className="d-flex">
                        <div className="input-group">
                            <span className="input-group-text"></span>
                            <input type="text" className="form-control" />
                        </div>
                        <button className="btn" type="submit">Search</button>
                    </form>

                </div>

            

        </div>
    </nav>
    )
}

export default Navbar
