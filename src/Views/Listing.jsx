import React from 'react'
import { useListPokemons } from '../pokemon.service';
import { v4 as uuidv4 } from 'uuid'
import styles from '../Styles/Listing.module.scss'

import Card from '../Components/Card/Card'

const Listing = () => {

  const pokemons = useListPokemons();
  console.log(pokemons);
  

  return (
    <div className={ `container ${ styles.listing }` }>
      <div className="row">
        { 
            pokemons.map( ( pokemon, index ) => {
              return <Card key={ uuidv4() } id={ index + 1 } name={ pokemon.name }  />
            }) 
        }
      </div>
    </div>
  )
}

export default Listing
