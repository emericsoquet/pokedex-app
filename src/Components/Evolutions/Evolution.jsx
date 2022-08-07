// dependencies
import React from 'react'

// services
import { useEvolutions, usePokemon } from '../../tools/pokemon.service'

// styles
import styles from '../../Styles/Evolutions.module.scss'

// problème pour evolution.jsx avec vite : Il faut sauvegarder ce fichier pour que les sprites s'affichent
const Evolution = (props) => {

  // récupération de la chaîne d'évolution
  const evolutionDetails = useEvolutions(props.details.url)
  
  // récupération de pokemon à partir de evolution-chain (sprites, principalement)
  const id = evolutionDetails.id
  const pokemon = usePokemon(id)

  // ajout d'une classe spécifique dépendant du stade d'évolution
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
