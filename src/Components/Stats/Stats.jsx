import React from 'react'
import styles from '../../Styles/Pokemon.module.scss'
import { v4 as uuidv4 } from 'uuid'

const maxStat = 255

const Stats = ({pokemon}) => {
  return (
    <div className={styles.pokemon__stats}>
        <div className="container">
            <div className="row col-xl-10 col-xxl-8 mx-auto">
                { pokemon.stats &&
                    pokemon.stats.map( (stat) => {
                    return <div key={ uuidv4() } className={`col-12 col-md-6 ${styles.pokemon__stat}`}>
                                <h3>{ stat.stat.name }</h3>
                                <div className={ styles.stat__bar_empty }>
                                    {/* deuxième div pour inclure, dans chaque barre, une barre colorée avec une largeur calculcée selon la stat du pokémon et la stat la plus élevée du jeu 255 */}
                                    <div className={ styles.stat__bar_full } 
                                         style={{ width: `${((stat.base_stat * 100) / maxStat )}%` }}
                                    >                                        <span>{ stat.base_stat }</span></div>
                                </div>
                            </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}
export default Stats
