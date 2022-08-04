import React, { useEffect, useState } from 'react'
import { usePokemonList } from '../tools/pokemonList.service';
import { v4 as uuidv4 } from 'uuid'
import styles from '../Styles/Listing.module.scss'

import Card from '../Components/Card/Card'
import Searchbar from '../Components/Searchbar/Searchbar'

const Listing = () => {

  const pokemon = usePokemonList()

  return (
    <div className={ `container ${ styles.listing }` }>
      <div className="row">

      <Searchbar />
      { pokemon &&
        // slice(1) pour retirer l'élément 0 -> aucun pokémon n'ayant l'id 0
        pokemon.slice(1).map( (pokemon, index) => {
              return <Card key={ uuidv4() } id={ index + 1 } pokemon={pokemon} name={ pokemon.name } />
          }
        )
      }
      </div>
    </div>
  )
}

export default Listing

