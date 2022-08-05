import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import styles from '../../Styles/Navbar.module.scss'
import pokeball from '../../assets/pokeball.svg'

import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'

const Navbar = () => {

    const favorites = useSelector((state) => state.favorites);

    return (
    <nav className={ `navbar navbar-expand-md ${ styles.nav }` }>
        <div className="container-fluid">
            
                <button className={`navbar-toggler ${styles.nav__toggler}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className={`${styles.nav__toggler_icon}`}></span>
                </button>

                <div className="navbar-collapse collapse d-md-flex justify-content-md-between" id="navbarSupportedContent">

                    <ul className={ `navbar-nav` }>
                        <li className="nav-item">
                            <NavLink    className={ state => state.isActive ? styles.nav__active : '' }
                                        to="/"
                            >All Pokémons</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink    className={ state => state.isActive ? styles.nav__active : '' }   
                                        to="/pokedex"
                            >Pokédex</NavLink>
                        </li>
                    </ul>

                </div>

                <div className={styles.nav__counter}>
                    <div className={`${styles.nav__counter_catched}`}>
                        <img src={pokeball} alt="Pokeball with catched pokemon" />
                        <p>{ favorites.length } catched</p>
                    </div>
                </div>

            

        </div>
    </nav>
    )
}

export default Navbar
