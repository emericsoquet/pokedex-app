import React, { useEffect } from 'react'
import { usePokemon, usePokemonDetails } from '../../tools/pokemon.service';
import styles from '../../Styles/Card.module.scss'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { addFavorite } from '../../actions'

import pokeball from '../../assets/pokeball.svg'


const Card = ( props ) => {

  const favorites = useSelector((state) => state.favorites)
  console.log('POKÉDEX', favorites)

  const pokemon = usePokemon(props.name)
  const dispatch = useDispatch();

  const addPokemon = (event) => {
    event.preventDefault();
    const payload = {
      pokemon: props.pokemon
    }
    dispatch(addFavorite(payload))
    console.log('AJOUTÉ AU POKÉDEX')
  }
  
  const removePokemon = (event) => {
    event.preventDefault();
    const payload = {
      pokemon: props.pokemon
    }
    dispatch(removeFavorite(payload))
    console.log('RETIRÉ DU POKÉDEX')
  }

  console.log('POKÉMON', props)
  console.log('FAVORI', favorites.map( element => { element.includes('metapod')}) )

  return (
    <>
      { pokemon && 
        <Link to={`/pokemon/${ props.id }`} className={ `col-10 mx-auto col-sm-6 col-lg-3 ${ styles.card }` }>
          
          <figure className={ styles.card__container } >

            { pokemon.sprites &&
            <img  src={   
                          pokemon.sprites.front_default 
                      } 
                  alt={ pokemon.name } />
            }

            <figcaption>{ pokemon.name }</figcaption>

            <div className={ styles.number }>
              { pokemon.id }
            </div>

          </figure>
          <button onClick={ addPokemon } className={ styles.button }>
            <img src={pokeball} alt="Add to/Remove from favorites" />
          </button>
        </Link>
      }
    </>

  )
}

export default Card
