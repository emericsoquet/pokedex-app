import React from 'react'
import { usePokemon, usePokemonDetails } from '../../tools/pokemon.service';
import styles from '../../Styles/Card.module.scss'
import { Link } from 'react-router-dom'

const Card = ( props ) => {

  const pokemon = usePokemon( props.name )

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
          <button className={ styles.button }></button>
        </Link>
      }
    </>

  )
}

export default Card

//pokemon.sprites.versions['generation-v']['black-white']['front_default']
