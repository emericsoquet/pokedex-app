import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite  } from '../actions'
import { v4 as uuidv4 } from 'uuid'

import Card from '../Components/Card/Card'

const Pokedex = () => {
  const favorites = useSelector((state) => state.favorites)
  console.log(favorites)
  return (
    <div className="container">
      <div className="row">
      { favorites.length > 0 ?
        // si favori
        <>
          { favorites.map( (favorite, index) => {
              return (
                <Card key={ uuidv4() } id={ index + 1 } name={ favorite.pokemon.name } />
              )

              console.log(favorite.pokemon.name)
          }) }
        </> : 
        // si aucun favori
        <>
          Aucun favori
        </>
      }
      </div>
    </div>
  )
}

export default Pokedex
