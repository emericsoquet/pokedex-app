import { useState, useEffect } from 'react';
import axios from 'axios';

// variables & constantes
let perPage = 20
let limit = 898
let offset = 0 // à partir de quel pokémon on prend en compte la recherche -> ici le tout premier
const base = 'https://pokeapi.co/api/v2/'

export function usePokemonList() {
    
        // déclaration de states : 
        // - pokemons pour les pokémons dans la rangée
        const [pokemons, setPokemons] = useState([])
        // - pokemonRow pour l'augmentation de la rangée, passant de 20 en 20
        const [pokemonRow, setPokemonRow] = useState(perPage)
        const [allPokemons, setAllPokemons] = useState([])

        useEffect( () => {
            async function fetchList() {

                // récupération de tous les pokémons via l'API
                const { data } = await axios.get(`${base}pokemon?limit=${limit}&offset=0`)
                .catch( (error) => { 
                    console.log(error)
                })

                // tous les pokémons sont poussés dans un tableau
                const row = []
                data.results.map( element => {
                    row.push(element)
                })
                
                // on découpe ce tableau par tranche; une nouvelle tranche sera appelée à chaque modifiction de pokemonRow
                const sliced = row.slice(offset, offset + pokemonRow)
                setPokemons(sliced)
                setAllPokemons(row)

            }
            window.addEventListener('scroll', bottomList) 
            fetchList()
        }, [pokemonRow]) 

        // modifie pokemonRow (tranche de 20) à chaque fois que le visiteur défile tout en bas de son écran
        const bottomList = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement
            if( pokemons.length < limit) {
                if (scrollHeight - scrollTop <= clientHeight) {
                    setPokemonRow( pokemonRow => pokemonRow + 20)
                }
            }
        }

    return pokemons;
}

export function usePokemonSearch() {
    
    // déclaration de states : 
    // - tous les pokémons
    const [pokemons, setPokemons] = useState([])

    useEffect( () => {
        async function fetchList() {

            // récupération de tous les pokémons via l'API
            const { data } = await axios.get(`${base}pokemon?limit=${limit}&offset=0`)
            .catch( (error) => { 
                console.log(error)
            })

            // tous les pokémons sont poussés dans un tableau
            const row = []
            data.results.map( element => {
                row.push(element)
            })
            
            // on découpe ce tableau par tranche; une nouvelle tranche sera appelée à chaque modifiction de pokemonRow
            setPokemons(row)
        }
        fetchList()
    }, []) 

    return pokemons;
} 




