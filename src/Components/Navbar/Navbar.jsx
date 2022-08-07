// dependencies
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

// styles
import styles from '../../Styles/Navbar.module.scss'
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'

// img
import pokeball from '../../assets/pokeball.svg'

const Navbar = () => {

    // appel d'un state global via redux
    const favorites = useSelector((state) => state.favorites);

    return (
    // classes bs pour le responsive du menu
    <nav className={ `navbar navbar-expand-md ${ styles.nav }` }>
        <div className="container-fluid">
            
                <button className={`navbar-toggler ${styles.nav__toggler}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className={`${styles.nav__toggler_icon}`}></span>
                </button>

                <div className="navbar-collapse collapse d-md-flex justify-content-md-between" id="navbarSupportedContent">

                    <ul className={ `navbar-nav` }>
                        {/* pour chaque li, on test s'il est actif. Si c'est le cas, une classe lui est donné */}
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
                        {/* nombre de pokémons dans le pokédex */}
                        <p>{ favorites.length } catched</p>
                    </div>
                </div>

            

        </div>
    </nav>
    )
}

export default Navbar
