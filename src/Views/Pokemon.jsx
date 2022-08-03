import React from 'react'
import { useParams } from 'react-router-dom'
import { usePokemon, usePokemonDetails } from '../pokemon.service';
import { v4 as uuidv4 } from 'uuid'
import Evolutions from '../Components/Evolutions/Evolutions';
import styles from '../Styles/Pokemon.module.scss'

const Pokemon = () => {

  const params = useParams()
  const pokemon = usePokemon( params.id )
  const pokemonDetails = usePokemonDetails( params.id )


  const { flavor_text : description } = pokemonDetails.flavor_text_entries?.find(({ language, version }) => {
    return (language.name === 'en' && version.name === 'sword')
  }) ?? {};

  return (
    <>
    { pokemon && pokemonDetails &&

      <div className={`${ styles.pokemon }`}>
        <div className="container">
          <div className={`row ${ styles.pokemon__identity }`}>

            <figure className={`${ styles.pokemon__img } col-4 mx-auto`}>
              { pokemon.sprites &&
                  <img src={ 
                              pokemon.sprites.versions['generation-v']['black-white'].animated.front_default != null ? 
                              pokemon.sprites.versions['generation-v']['black-white'].animated.front_default : 
                              pokemon.sprites.front_default  } 
                  />
                  
              }
              { console.log(pokemon.sprites)}
            </figure>

            <div className={`${ styles.pokemon__body }`} >

              <h1>{ pokemon.name }</h1>

              <h2>{ pokemonDetails.genera?.[7].genus }</h2>
                    
                    { description
                    }

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
                <li>Height: { (Math.round(pokemon.height * 10) / 100).toFixed(2) } m</li>
                <li>Weight: { (Math.round(pokemon.weight * 10) / 100).toFixed(2) } kg</li>
                <li>Catch rate: { pokemonDetails.capture_rate }</li>
                <li>Hatch counter: { pokemonDetails.hatch_counter } cycles</li>
                <li>Gender: 
                      <span>{ (pokemonDetails.gender_rate / 8) * 100 }% female</span>
                      <span>{ ((8 - pokemonDetails.gender_rate) / 8) * 100 }% male</span>  
                </li>
                <li>
                    Group: 
                    { 
                        pokemonDetails.egg_groups?.map( (group, index) => {
                        return <span key={ index }>{ group.name }</span>
                        })
                    } 
                </li>
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
      </div>
      
    }
    </>
  )
}

export default Pokemon

