import React from 'react'
import { useParams } from 'react-router-dom'
import { usePokemon, usePokemonDetails } from '../tools/pokemon.service';
import { v4 as uuidv4 } from 'uuid'
import Evolutions from '../Components/Evolutions/Evolutions';
import styles from '../Styles/Pokemon.module.scss'

import Identity from '../Components/Identity/Identity';
import Stats from '../Components/Stats/Stats';
import Metas from '../Components/Metas/Metas';

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

                            <Metas pokemon={pokemon} pokemonDetails={pokemonDetails} />

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

