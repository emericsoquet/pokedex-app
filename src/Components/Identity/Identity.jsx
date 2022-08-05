import React from 'react'
import styles from '../../Styles/Pokemon.module.scss'
import { v4 as uuidv4 } from 'uuid'

const Identity = ({pokemon, pokemonDetails}) => {

    // ciblage de la description la plus récente, en anglais
    const { flavor_text : description } = pokemonDetails.flavor_text_entries?.find(({ language, version }) => {
        return (language.name === 'en' && version.name === 'sword')
    }) ?? {};

    return (
        <>
            <div className={`container ${ styles.pokemon__identity }`}>

                <div className={`row mx-xl-auto ${ styles.pokemon__banner}`}>

                    <figure className={`${ styles.pokemon__img } col-4 col-lg-3 col-xl-2 offset-xl-1 offset-xxl-2`}>

                        {/* si le pokémon est ultérieur à la génération 5, pas de gif donc on affiche une alternative */}
                        { pokemon.sprites &&
                            <img src={ 
                                        pokemon.sprites.versions['generation-v']['black-white'].animated.front_default != null ? 
                                        pokemon.sprites.versions['generation-v']['black-white'].animated.front_default : 
                                        pokemon.sprites.front_default  } 
                            />   
                        }

                    </figure>

                    <div className="col-8">
                        <div className={ styles.pokemon__types }>
                            { pokemon.types &&
                                pokemon.types.map( (element) => {
                                return <span key={uuidv4()}>{ element.type.name }</span>
                                }) 
                            }
                        </div>
                        <h1>{ pokemon.name }</h1>
                        <p>{ pokemonDetails.genera?.[7].genus }</p>
                        <div className={ `${styles.pokemon__id}` }>
                            { pokemon.id }
                        </div>
                    </div>
                    
                </div>

            </div>
            <div className={styles.pokemon__description}>
                <div className="container">
                    <div className="row">
                        <p className="col-10 col-md-8 col-lg-6 col-xxl-5">{ description }</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Identity
