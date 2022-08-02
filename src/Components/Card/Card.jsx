import React from 'react'
import { usePokemon } from '../../pokemon.service';
import styles from '../../Styles/Card.module.scss'
import { Link } from 'react-router-dom'

const Card = ( props ) => {

  const pokemon = usePokemon( props.name )
  // console.log(  )

  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/transparent/${ props.id }.png`
  console.log(url)
  return (
    <Link to={`/pokemon/${ props.id }`} className={ `col-10 mx-auto col-sm-6 col-lg-3 ${ styles.card }` }>
      <figure className={ styles.card__container } >

        <img src={ url } alt={ pokemon.name } />

        <figcaption>{ pokemon.name }</figcaption>

        <div className={ styles.number }>
          { pokemon.order }
        </div>

      </figure>
      <button className={ styles.button }></button>
    </Link>

  )
}

export default Card

//pokemon.sprites.versions['generation-v']['black-white']['front_default']
