import React from 'react'
import { useEvolutionDetails, usePokemon } from '../../tools/pokemon.service'
import { Link } from 'react-router-dom'
import styles from '../../Styles/Evolutions.module.scss'

const Evolution = (props) => {

  const evolutionDetails = useEvolutionDetails(props.details.url)
  
  const id = evolutionDetails.id
  
  const pokemon = usePokemon(id)

  const stage = props.stage
  let stageStyle
  switch (stage) {
    case 'first':
      stageStyle = styles.evolution__first
      break;
    case 'second':
      stageStyle = styles.evolution__second
      break;
    case 'third':
      stageStyle = styles.evolution__third
      break;
    default:
      ''
  }

  return (
    
    // je n'ai pas trouvé avec NavLink pour que les données soient mises à jour
    <a onClick={() => {window.location.href="../pokemon/" + id }} 
       className={`${styles.evolution} ${stageStyle} col-10 col-md-4 mx-auto`}
    >

        <figure className={`${ styles.evolution__pokemon}`}>
            <img 
                src={ pokemon.sprites && pokemon.sprites.front_default }
                alt={`Image of ${props.details.name}`}
            />
            <figcaption>{ pokemon.name }</figcaption>
        </figure>
        
    </a>
    
  )
}

export default Evolution
