import React, { useEffect } from 'react'
import { usePokemon, usePokemonDetails } from '../../tools/pokemon.service';
import styles from '../../Styles/Card.module.scss'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { addFavorite, removeFavorite } from '../../actions'

import pokeball from '../../assets/pokeball.svg'


const Card = ( { pokemon } ) => {

  const name = pokemon.name
  const pokemonInfos = usePokemon(name)
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites);

  const addPokemon = () => {
    const payload = {
      infos: pokemonInfos,
      id: pokemonInfos.id
    }
    dispatch(addFavorite(payload))
    localStorage.setItem('favorites', addFavorite);
    console.log('AJOUTÉ DU POKÉDEX')
  }

  const existantFavorite = (pokemonName) => favorites.findIndex( element => element.infos.name == pokemonName )

  const manageFavorites = (event, pokemonName, id) => {
    event.preventDefault()
    existantFavorite(pokemonName) !== -1 ? dispatch(removeFavorite(id)) : addPokemon()
  }

 
  return (
    <>
      { pokemonInfos && 

        <Link to={`/pokemon/${ pokemonInfos.id }`} className={ `col-10 mx-auto col-sm-6 mx-sm-0 col-lg-3 ${ styles.card }` }>
          <figure className={ styles.card__container } >

            { pokemonInfos.sprites &&
            <img  src={   
                          pokemonInfos.sprites.front_default 
                      } 
                  alt={ pokemonInfos.name } />
            }

            <figcaption>{ pokemonInfos.name }</figcaption>

            <div className={ styles.number }>
              { pokemonInfos.id }
            </div>


          </figure>
          <button 
                  onClick={ (event) => manageFavorites(event, pokemonInfos.name, pokemonInfos.id) } 
                  className={`${styles.button}
                              ${ existantFavorite(pokemonInfos.name) !== -1 ? styles.button_catched : '' }`}
            >
            <img src={pokeball} alt="Add to/Remove from favorites" />
          </button>

        </Link>
      }
    </>

  )
}

export default Card
