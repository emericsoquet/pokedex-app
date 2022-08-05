import React from 'react'
import styles from '../../Styles/Pokemon.module.scss'
import { v4 as uuidv4 } from 'uuid'

const Stats = ({pokemon}) => {
  return (
    <div className={styles.pokemon__stats}>
      { pokemon.stats &&
                                    pokemon.stats.map( (stat, index) => {
                                    return <li key={ uuidv4() }>{ stat.stat.name } : { stat.base_stat }</li>
                                    })
                                }
    </div>
  )
}
export default Stats
