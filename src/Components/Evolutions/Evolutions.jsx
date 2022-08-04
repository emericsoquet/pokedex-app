import React from 'react'
import { useParams } from 'react-router-dom'
import { usePokemonDetails, useEvolutions } from '../../tools/pokemon.service'
import styles from '../../Styles/Evolutions.module.scss'
import { v4 as uuid } from 'uuid'
import Evolution from './Evolution'

const Evolutions = () => {

    // récupérer l'url de la chaîne d'évolution
    const params = useParams()
    const pokemonDetails = usePokemonDetails( params.id )
    const url = pokemonDetails.evolution_chain && pokemonDetails.evolution_chain.url

    // faire une requête sur cet ur
    const evolutions = useEvolutions( url )
    const chain = evolutions.chain

    // initialisation des variables stages pour chaque stade d'évolution
    let firstStage
    let secondStage
    let thirdStage
    
    // si la requête est bien passée, on a normalement la variable chain
    // on associe à chaque variable le composant Evolution avec les props qui lui sont dédiées
    if(chain) {

        {/* Premier stade */}
        firstStage = <Evolution key={ uuid() } details={ chain.species } stage="first" />

        {/* Deuxième(s) évolution(s) */}
        secondStage = chain.evolves_to?.map( (second) => {
            return <Evolution key={ uuid() } details={ second.species } stage="second" />
        })

        {/* Troisième(s) évolution(s) */}
        thirdStage = chain.evolves_to?.map( second => (
            <>
                { second.evolves_to.map( (third) => {
                    const url = third.species
                    return <Evolution key={ uuid() } details={ url } stage="third" />    
                }) 
                }
            </>
        ))

    }


    return (
        <>
            { chain && 
                <section className={`${styles.evolutions}`}>
                    <h3>Evolutions</h3>

                    {/* Insertion des variables dans le JSX */}
                    { firstStage }
                    { secondStage }
                    { thirdStage }

                </section>
            }
        </>
    )


}

export default Evolutions

