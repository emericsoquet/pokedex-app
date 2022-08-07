import React from 'react'
import styles from '../../Styles/Pokemon.module.scss'
import { v4 as uuidv4 } from 'uuid'

// les données sont dans deux url à savoir pokemon/ et pokemon-species/
const Metas = ({pokemon, pokemonDetails}) => {

    return (
        <>
            <div className={`container ${ styles.pokemon__metas }`}>

                <ul className="row col-xl-10 col-xxl-8 mx-auto">
                    {/* arrondi à deux virgules du poids et de la taille + conversion en m et kg */}
                    <li className={`${ styles.meta } col-12 col-md-6 col-xl-4`}>
                        <span className={ styles.meta__property }>Height</span>
                        <span className={ styles.meta__value }>{ (Math.round(pokemon.height * 10) / 100).toFixed(2) } m</span>
                    </li>
                    <li className={`${ styles.meta } col-12 col-md-6 col-xl-4`}>
                        <span className={ styles.meta__property }>Weight</span>
                        <span className={ styles.meta__value }>{ (Math.round(pokemon.weight * 10) / 100).toFixed(2) } kg</span>
                    </li>
                    <li className={`${ styles.meta } col-12 col-md-6 col-xl-4`}>
                        <span className={ styles.meta__property }>Catch rate</span>
                        <span className={ styles.meta__value }>{ pokemonDetails.capture_rate }</span>
                    </li>
                    <li className={`${ styles.meta } col-12 col-md-6 col-xl-4`}>
                        {/* pour le genre : 8 = le plus de chances d'être une femelle et 1, d'être un mâle
                                            si -1, le pokémon n'a pas de genre donc unknown
                         */}
                        <span className={ styles.meta__property }>Gender</span>
                        { pokemonDetails.gender_rate === -1 ? 
                            <span className={ styles.meta__value }>Unknown</span> :
                            <>
                                <span className={ styles.meta__value }>{ (pokemonDetails.gender_rate / 8) * 100 }% ♀ </span>
                                <span className={ styles.meta__value }>{ ((8 - pokemonDetails.gender_rate) / 8) * 100 }% ♂</span>  
                            </>
                        }
                    </li>
                    <li className={`${ styles.meta } col-12 col-md-6 col-xl-4`}>
                        <span className={ styles.meta__property }>Egg group</span>
                        <span className={ styles.meta__value }>
                            { 
                                pokemonDetails.egg_groups?.map( (group) => {
                                    return <span key={ uuidv4() } className={`${ styles.meta__value } ${ styles.meta__multiple}` }>{ group.name }</span>
                                })
                            } 
                        </span>
                    </li>
                    <li className={`${ styles.meta } col-12 col-md-6 col-xl-4`}>
                        <span className={ styles.meta__property }>Hatch counter</span>
                        <span className={ styles.meta__value }>{ pokemonDetails.hatch_counter } cycles</span>
                    </li>
                    <li className={`${ styles.meta } col-12`}>
                        <span className={ styles.meta__property }>Abilities</span>
                        { pokemon.abilities?.map( (ability, index) =>
                            <span className={`${ styles.meta__value } ${ styles.meta__multiple}`} key={ uuidv4() }>{ ability.ability.name }</span>
                        )}
                    </li>
                </ul>

            </div>

        </>
    )
}
export default Metas
