import React from 'react'
import { useParams } from 'react-router-dom'
import { usePokemon, usePokemonDetails } from '../tools/pokemon.service';
import { v4 as uuidv4 } from 'uuid'
import styles from '../Styles/Pokemon.module.scss'
import pokeball from '../assets/pokeball.svg'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, removeFavorite } from '../actions'

import Identity from '../Components/Identity/Identity';
import Stats from '../Components/Stats/Stats';
import Metas from '../Components/Metas/Metas';
import Evolutions from '../Components/Evolutions/Evolutions';

const Pokemon = () => {

    const params = useParams()
    const pokemon = usePokemon( params.id )
    const pokemonDetails = usePokemonDetails( params.id )

    const dispatch = useDispatch();

    const favorites = useSelector((state) => state.favorites);

    const addPokemon = () => {
        const payload = {
        infos: pokemonDetails,
        id: pokemonDetails.id
        }
        dispatch(addFavorite(payload))
        localStorage.setItem('favorites', addFavorite);
        console.log('AJOUTÉ DU POKÉDEX')
    }

    const existantFavorite = (pokemonName) => favorites.findIndex( element => element.infos.name == pokemonName )

    const manageFavorites = (event, pokemonName, id) => {
        event.preventDefault()
        existantFavorite(pokemonName) !== -1 ? Swal.fire({
            title: 'Remove from Léo\'s PC',
            text: 'Are you sure you want to release this Pokemon?',
            icon: 'error',
            confirmButtonText: 'Yes',
            confirmButtonColor: '#f33930',
            showCancelButton: 'true',
            cancelButtonText: 'No',
            cancelButtonColor: '#ccc'
          }).then( result => {
            if (result['isConfirmed']) {
              dispatch(removeFavorite(id))
            } else { return }
          }) : addPokemon()
    }

    return (
        <>
            { pokemon && pokemonDetails &&
                <main>
                    <div className={`${ styles.pokemon }`}>

                        <Identity pokemon={pokemon} pokemonDetails={pokemonDetails} />

                        <div className={`${ styles.pokemon__body }`} >

                        <div className={`container ${styles.pokemon__buttons}`}>
                            <button 
                                    onClick={ (event) => manageFavorites(event, pokemonDetails.name, pokemonDetails.id) } 
                                    className={`button ${styles.pokemon__button}
                                                ${ existantFavorite(pokemonDetails.name) !== -1 ? 'button_catched' : '' }`}
                            ><img src={pokeball} alt="Add to/Remove from favorites" /></button>
                        </div>

                        <Stats pokemon={pokemon} />

                        <Metas pokemon={pokemon} pokemonDetails={pokemonDetails} />

                            
                            <Evolutions  />
                            
                        </div>
                        

                    </div>
                </main>
                
            }
        </>
    )
}

export default Pokemon

