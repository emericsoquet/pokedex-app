import React from 'react'
import { useParams } from 'react-router-dom'
import { usePokemon } from '../pokemon.service';
import { v4 as uuidv4 } from 'uuid'
import Evolutions from '../Components/Evolutions/Evolutions';
import styles from '../Styles/Pokemon.module.scss'

const Pokemon = () => {

  const params = useParams()
  const pokemon = usePokemon( params.id )
  console.log( pokemon )


  return (
    <div className="${ styles.pokemon }">
      <div className="container">
        <div className={`row ${ styles.pokemon__identity }`}>

          <figure className={`${ styles.pokemon__img } col-4 mx-auto`}>
            { pokemon.sprites &&
                <img src={ pokemon.sprites.versions['generation-ii'].crystal.front_transparent } />
            }
          </figure>

          <h1>{ pokemon.name }</h1>

          <ul>
            { pokemon.stats &&
                pokemon.stats.map( (stat, index) => {
                  return <li key={ uuidv4() }>{ stat.stat.name } : { stat.base_stat }</li>
                })
            }
          </ul>

          <ul>
            { pokemon.abilities &&
                <li>Abilities: { pokemon.abilities.map( (ability, index) =>
                    <span key={ index }>{ ability.ability.name }</span>
                )}</li>
            }
            <li>Height: { pokemon.height * .1 } m</li>
            <li>Weight: { pokemon.weight * .1 } kg</li>
            <li>Catch rate: </li>
          </ul>
          
          <ul>
              { pokemon.types &&
                pokemon.types.map( (element, index) => {
                  return <li key={ index }>{ element.type.name }</li>
                }) 
              }
          </ul>

          { pokemon.species && 
              <Evolutions  />
          }
        </div>
      </div>
    </div>
  )
}

export default Pokemon

