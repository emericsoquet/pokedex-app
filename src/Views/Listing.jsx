import React, { useEffect, useState } from 'react'
import { usePokemonList } from '../tools/pokemonList.service';
import { v4 as uuidv4 } from 'uuid'
import styles from '../Styles/Listing.module.scss'

import Card from '../Components/Card/Card'

const Listing = () => {

  const pokemon = usePokemonList()

  return (
    <div className={ `container ${ styles.listing }` }>
      <div className="row">
      { pokemon &&
        // slice(1) pour retirer l'élément 0 -> aucun pokémon n'ayant l'id 0
        pokemon.slice(1).map( (pokemon, index) => {
              return <Card key={ uuidv4() } id={ index + 1 } name={ pokemon.name } />
          }
        )
      }
      </div>
    </div>
  )
}

export default Listing

