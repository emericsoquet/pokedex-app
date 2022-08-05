import React, { useRef, useState, useEffect } from 'react'
import styles from '../../Styles/Searchbar.module.scss'
import { usePokemonSearch } from '../../tools/pokemonList.service';

const Searchbar = () => {

    const pokemons = usePokemonSearch()
    const inputValue = useRef()

    const [search, setSearch] = useState()
    const [firstCall, setFirstCall] = useState(true)

    useEffect( () => {
        // ne pas lancer la recherche lors de l'affichage de la page
        if(!firstCall) {
            const searchString = '/^' + search + '.*$/'
            const newArr = pokemons?.filter( pokemon => pokemon.name.match(searchString) || pokemon.name.match(search))
            console.log(newArr)
        }
        setFirstCall(false)
    }, [search])

    useEffect( () => {
        
    })

    const handleSearch = event => {
        event.preventDefault()
        console.log(inputValue.current.value)
        /* console.log(inputValue.current.value) */
        setSearch(inputValue.current.value)
    }

    return (
        <form role="search" className={`col-10 mx-auto ${styles.searchbar}`} onSubmit={handleSearch}>
            <label for="search-pokemon">Seek out wild Pokémons!</label>
            <div className="input-group">
                <input type="text" className="form-control" id="search-pokemon" ref={inputValue} />
                <button className="input-group-text" type="submit">Search</button>
            </div>
            
        </form>
    )
}

export default Searchbar
