import React, { useEffect } from 'react'
import { usePokemon, usePokemonDetails } from '../../tools/pokemon.service';
import styles from '../../Styles/Card.module.scss'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

import { addFavorite, removeFavorite } from '../../actions'

import pokeball from '../../assets/pokeball.svg'


const Card = ( { pokemon } ) => {

  // récupération du nom via les props -- va permettre de récupérer la bonne URL
  const name = pokemon.name

  // de pokemon.service, l'url vers l'API
  const pokemonInfos = usePokemon(name)
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites);

  // fonction pour ajouter un pokémon aux favoris, depuis la fonction addFavorite
  // pour déclarer les propriétés dans le payload --> removeFavorite n'aura pas besoin de le faire donc on pourra appeler comme tel
  const addPokemon = () => {
    const payload = {
      infos: pokemonInfos,
      id: pokemonInfos.id
    }
    dispatch(addFavorite(payload))
    // on stocke dans le tableau favorite le pokémon ajouté -- cache local
    localStorage.setItem('favorites', addFavorite);
  }

  // condition : est-ce que le pokémon existe dans le tableau favorite
  const existantFavorite = (pokemonName) => favorites.findIndex( element => element.infos.name == pokemonName )

  const manageFavorites = (event, pokemonName, id) => {
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
    }): 
    // s'il n'y est pas, ajout
    addPokemon()
  }

 
  return (
    <>
      { pokemonInfos && 

        // lien vers la fiche pokémon pour chaque carte générée
        <Link to={`/pokemon/${ pokemonInfos.id }`} 
              className={   `col-10 mx-auto col-sm-6 mx-sm-0 col-lg-3 
                            ${ styles.card }`
                            
                         }>
          <figure className={ styles.card__container } >

            { pokemonInfos.sprites &&
            <img  src={   
                          pokemonInfos.sprites.front_default 
                      } 
                  alt={ pokemonInfos.name } />
            }

            <figcaption>{ pokemonInfos.name }</figcaption>

            <div className={ styles.number }>
              { pokemonInfos.id }
            </div>


          </figure>

          {/* au clic sur le bouton pokéball, appel de manageFavorites qui lancera soit la fonction addPokemon ou la pop */}
          <button 
                  onClick={ (event) => manageFavorites(event, pokemonInfos.name, pokemonInfos.id) } 
                  className={`button
                              ${ existantFavorite(pokemonInfos.name) !== -1 ? 'button_catched' : '' }`}
            >
            <img src={pokeball} alt="Add to/Remove from favorites" />
          </button>

        </Link>
      }
    </>

  )
}

export default Card
