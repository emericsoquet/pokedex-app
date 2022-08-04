import React, { useRef, useState, useEffect } from 'react'

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

    const handleSearch = event => {
        event.preventDefault()
        console.log(inputValue.current.value)
        /* console.log(inputValue.current.value) */
        setSearch(inputValue.current.value)
    }

    return (
        <form role="search" className="d-flex" onSubmit={handleSearch}>
            <div className="input-group">
                <span className="input-group-text"></span>
                <input type="text" className="form-control" ref={inputValue} />
            </div>
            <button className="btn" type="submit">Search</button>
        </form>
    )
}

export default Searchbar
