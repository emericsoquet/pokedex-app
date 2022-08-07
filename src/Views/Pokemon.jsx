// dependencies
import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2/dist/sweetalert2.js'

// hooks 
import { usePokemon, usePokemonDetails } from '../tools/pokemon.service';

// actions
import { addFavorite, removeFavorite } from '../actions'

// styles 
import styles from '../Styles/Pokemon.module.scss'
import 'sweetalert2/src/sweetalert2.scss'

// components
import Identity from '../Components/Identity/Identity';
import Stats from '../Components/Stats/Stats';
import Metas from '../Components/Metas/Metas';
import Evolutions from '../Components/Evolutions/Evolutions';

// img
import pokeball from '../assets/pokeball.svg'

const Pokemon = () => {

    // récupération de l'id dans l'url après "pokemon/" : qu'il s'agisse de l'id ou du nom, les deux fonctionnent
    const params = useParams()

    // de pokemon.service, l'url vers l'API
    const pokemon = usePokemon( params.id ) 
    const pokemonDetails = usePokemonDetails( params.id ) 

    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);

    // fonction pour ajouter un pokémon aux favoris, depuis la fonction addFavorite
    // pour déclarer les propriétés dans le payload --> removeFavorite n'aura pas besoin de le faire donc on pourra appeler comme tel
    const addPokemon = () => {
        const payload = {
            infos: pokemonDetails,
            id: pokemonDetails.id
        }
        dispatch(addFavorite(payload))
        // on stocke dans le tableau favorite le pokémon ajouté -- cache local
        localStorage.setItem('favorites', addFavorite);
    }

    // condition : est-ce que le pokémon existe dans le tableau favorite
    const existantFavorite = (pokemonName) => favorites.findIndex( element => element.infos.name == pokemonName )

    const manageFavorites = (event, pokemonName, id) => {
        // le bouton est sur une carte avec un lien : en plus d'être en z-index supérieur, on s'assure qu'il ne déclenche aucune autre action que manageFavorite
        event.preventDefault()

        // appel condition
        existantFavorite(pokemonName) !== -1 ? 
        // s'il est dans favorites, swalfire pour pop-up de confirmation de suppression
        Swal.fire({
            title: 'Remove from Léo\'s PC',
            text: 'Are you sure you want to release this Pokemon?',
            icon: 'error',
            confirmButtonText: 'Yes',
            confirmButtonColor: '#f33930',
            showCancelButton: 'true',
            cancelButtonText: 'No',
            cancelButtonColor: '#ccc'
          }).then( result => {
            // dans la pop-up, si on clique sur le bouton de confirmation, appel de la fonction remove favorite et pokémon supprimé de favorites (=pokédex)
            if (result['isConfirmed']) {
              dispatch(removeFavorite(id))
            } else { return }
          }) : 
          // s'il n'y est pas, ajout
          addPokemon()
    }

    return (
        <>
            { pokemon && pokemonDetails &&
                <main>
                    <div className={`${ styles.pokemon }`}>

                        {/* nom, id, genera, description, types, sprite */}
                        <Identity pokemon={pokemon} pokemonDetails={pokemonDetails} />

                        <div className={`${ styles.pokemon__body }`} >

                        {/* le bouton est placé à cet endroit */}
                        {/* au clic sur le bouton pokéball, appel de manageFavorites qui lancera soit la fonction addPokemon ou la pop */}
                        <div className={`container ${styles.pokemon__buttons}`}>
                            <button 
                                    onClick={ (event) => manageFavorites(event, pokemonDetails.name, pokemonDetails.id) } 
                                    className={`button ${styles.pokemon__button}
                                                ${ existantFavorite(pokemonDetails.name) !== -1 ? 'button_catched' : '' }`}
                            ><img src={pokeball} alt="Add to/Remove from favorites" /></button>
                        </div>

                        <Stats pokemon={pokemon} />

                        {/* height, weight, catch rate, egg group(s), gender, abilities, hatch counter */}
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

