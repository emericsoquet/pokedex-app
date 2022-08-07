// dependencies
import React, { useEffect, useState } from 'react'
import { usePokemonList, usePokemonSearch } from '../tools/pokemonList.service';
import { v4 as uuidv4 } from 'uuid'

// styles
import styles from '../Styles/Listing.module.scss'

// components
import Card from '../Components/Card/Card'
import Searchbar from '../Components/Searchbar/Searchbar'

const Listing = () => {
  // les 898 pokémons, par tranche de 20 = résultats par défaut, sans recherche 
  const pokemonList = usePokemonList([])

  // les 898 pokémons, filtrés par la searchbar
  const pokemonSearch = usePokemonSearch()

  const [search, setSearch] = useState('') // string dans l'input
  const [firstCall, setFirstCall] = useState(true) // première fois qu'on arrive sur la page
  const [pokemons, setPokemons] = useState([]) // tableau des pokémons recherchés

  useEffect( () => {

    // tableau vide quand on arrive sur la page, on vérifie si c'est la première fois qu'on arrive avec firstCall
    if(!firstCall) {
      setPokemons( pokemons.length = 0) // tableau vidé 
      const searchString = '/^' + search + '.*$/'
      // on filtre les 898 pokémons récupérés par la requête pokemonSearch avec le string défini au-dessus
      const arraySearch = pokemonSearch?.filter( pokemon => pokemon.name.match(searchString) || pokemon.name.match(search))
      setPokemons(arraySearch)
    }  
    setFirstCall(false) // appelé une première fois, firstCall désactivé

  }, [search] /* chaque fois que le string dans l'input change */ )

  return (
    <main>
      <div className={ `container ${ styles.listing }` }>
        <div className="row">

        <Searchbar setSearch={ setSearch } /> {/* avec setSearch, on récupère le string dans le component Searchbar pour le traiter dans le useEffect */}

        { 
        
               search == '' ? // si l'input est vide

                // on affiche les résultats par défaut
                pokemonList && pokemonList?.map( (pokemon, index) => {
                    return <Card key={ uuidv4() } id={ index + 1 } pokemon={ pokemon } name={ pokemon.name } />
                  }
                ) 
                : // sinon on affiche les résultats filtrés par l'input search
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

