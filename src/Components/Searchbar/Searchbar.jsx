// dependencies
import React, { useRef } from 'react'

// styles
import styles from '../../Styles/Searchbar.module.scss'

// setSearch en props pour donner le résultat de la recherche à la view Listing.jsx
const Searchbar = ({ setSearch }) => {

    // useRef pour cibler l'input
    const inputValue = useRef()

    // fonction qui empêche l'envoi de données du forum + prend la valeur dans l'input
    const handleSearch = event => {
        event.preventDefault()
        setSearch(inputValue.current.value)
    }
    

    return (
        // à chaque changement de la valeur de l'input, handleSearch la garde en mémoire et la donne à Listing.jsx
        <form role="search" className={`col-10 mx-auto ${styles.searchbar}`} onChange={ handleSearch }>
            <label htmlFor="search-pokemon">Seek out wild Pokémons!</label>
            <div className="input-group">
                <input type="text" className="form-control" id="search-pokemon" ref={inputValue} />
                {/* <button className="input-group-text" type="submit">Search</button> */}
            </div>
            
        </form>
    )
}

export default Searchbar
