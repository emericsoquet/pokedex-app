// dependencies
import React from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

// components
import Card from '../Components/Card/Card'

// styles
import styles from '../Styles/Pokedex.module.scss'

const Pokedex = () => {

  const favorites = useSelector((state) => state.favorites)

  return (
    <main>
      <div className="container">
        <div className={`row ${styles.pokedex}`}>
          { favorites.length > 0 ? // condition pour vérifier si les favoris existent
          
            <>
              <h1>Pokédex entries</h1>
              { favorites.map( (favorite, index) => {
                  return (
                    <Card key={ uuidv4() } id={ index + 1 } pokemon={ favorite.infos } />
                  )
              }) }
            </> : 

            // si aucun favori
            <>
              <h1>NO ENTRY!</h1>
            </>
          }
        </div>
      </div>
    </main>
  )
}

export default Pokedex
