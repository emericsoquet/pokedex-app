import React from 'react'
import { useEvolutionDetails, usePokemon } from '../../tools/pokemon.service'
import styles from '../../Styles/Evolutions.module.scss'

const Evolution = (props) => {

  const evolutionDetails = useEvolutionDetails(props.details.url)
  
  const id = evolutionDetails.id
  console.log(id)
  
  const pokemon = usePokemon(id)

  const stage = props.stage
  let stageStyle
  switch (stage) {
    case 'first':
      stageStyle = styles.evolution__first
    case 'second':
      stageStyle = styles.evolution__second
    case 'third':
      stageStyle = styles.evolution__third
    default:
      ''
  }

  return (
    <article className={`${styles.evolution} ${stageStyle}`}>
        <figure>
            <img 
                src={ pokemon.sprites && pokemon.sprites.front_default }
                alt={`Image of ${props.details.name}`}
            />
            <figcaption>{ pokemon.name }</figcaption>
        </figure>
    </article>
    
  )
}

export default Evolution
