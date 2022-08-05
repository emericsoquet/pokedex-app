import React from 'react'
import { useParams } from 'react-router-dom'
import { usePokemon, usePokemonDetails } from '../tools/pokemon.service';
import { v4 as uuidv4 } from 'uuid'
import Evolutions from '../Components/Evolutions/Evolutions';
import styles from '../Styles/Pokemon.module.scss'

import Identity from '../Components/Identity/Identity';
import Stats from '../Components/Stats/Stats';

const Pokemon = () => {

    const params = useParams()
    const pokemon = usePokemon( params.id )
    const pokemonDetails = usePokemonDetails( params.id )

    return (
        <>
            { pokemon && pokemonDetails &&
                <main>
                    <div className={`${ styles.pokemon }`}>

                        <Identity pokemon={pokemon} pokemonDetails={pokemonDetails} />

                        <div className={`${ styles.pokemon__body }`} >

                            <Stats pokemon={pokemon} />

                            <ul>
                                
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
                                    { pokemonDetails.gender_rate === -1 ? 
                                        <span>Unknown</span> :
                                        <>
                                        <span>{ (pokemonDetails.gender_rate / 8) * 100 }% female</span>
                                        <span>{ ((8 - pokemonDetails.gender_rate) / 8) * 100 }% male</span>  
                                        </>
                                    }
                                    
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

                            { pokemon.species && 
                                <Evolutions  />
                            }
                        </div>
                        

                    </div>
                </main>
                
            }
        </>
    )
}

export default Pokemon

