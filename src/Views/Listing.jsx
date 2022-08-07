import React, { useEffect, useState, useRef } from 'react'
import { usePokemonList, usePokemonSearch } from '../tools/pokemonList.service';
import { v4 as uuidv4 } from 'uuid'
import styles from '../Styles/Listing.module.scss'

import Card from '../Components/Card/Card'
import Searchbar from '../Components/Searchbar/Searchbar'

const Listing = () => {
  const pokemonList = usePokemonList([])
  const pokemonSearch = usePokemonSearch()
  const [search, setSearch] = useState('')
  const [firstCall, setFirstCall] = useState(true)
  const [pokemons, setPokemons] = useState([])

  const inputValue = useRef()


  useEffect( () => {

    if(!firstCall) {
      setPokemons( pokemons.length = 0)
      const searchString = '/^' + search + '.*$/'
      const arraySearch = pokemonSearch?.filter( pokemon => pokemon.name.match(searchString) || pokemon.name.match(search))
      setPokemons( arraySearch )
    }
    
    setFirstCall(false)
  }, [search])

  const handleSearch = event => {
      event.preventDefault()
      setSearch(inputValue.current.value)
  }

  return (
    <main>
      <div className={ `container ${ styles.listing }` }>
        <div className="row">

        {/* <Searchbar setSearch={ setSearch } /> */}
          <form role="search" className={`col-10 mx-auto ${styles.searchbar}`} onChange={ handleSearch }>
              <label htmlFor="search-pokemon">Seek out wild Pokémons!</label>
              <div className="input-group">
                  <input type="text" className="form-control" id="search-pokemon" ref={inputValue} />
                  <button className="input-group-text" type="submit">Search</button>
              </div>
              
          </form>

        { 
        
               search == '' ?
                pokemonList && pokemonList?.map( (pokemon, index) => {
                    return <Card key={ uuidv4() } id={ index + 1 } pokemon={ pokemon } name={ pokemon.name } />
                  }
                ) 
                : 
                pokemons && pokemons?.map( (pokemon, index) => {
                  return <Card key={ uuidv4() } id={ index + 1 } pokemon={ pokemon } name={ pokemon.name } />
                })
              
        }
        </div>
      </div>
    </main>
  )
}

export default Listing

