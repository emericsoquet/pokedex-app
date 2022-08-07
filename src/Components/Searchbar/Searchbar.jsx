import React, { useRef, useState, useEffect } from 'react'
import styles from '../../Styles/Searchbar.module.scss'
import { usePokemonSearch } from '../../tools/pokemonList.service';

const Searchbar = ({ setSearch }) => {

    const inputValue = useRef()

    const handleSearch = event => {
        event.preventDefault()
        setSearch(inputValue.current.value)
    }
    

    return (
        <form role="search" className={`col-10 mx-auto ${styles.searchbar}`} onChange={ handleSearch }>
            <label htmlFor="search-pokemon">Seek out wild Pokémons!</label>
            <div className="input-group">
                <input type="text" className="form-control" id="search-pokemon" ref={inputValue} />
                <button className="input-group-text" type="submit">Search</button>
            </div>
            
        </form>
    )
}

export default Searchbar
