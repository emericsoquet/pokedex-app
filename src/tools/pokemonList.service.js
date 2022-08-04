import { useState, useEffect } from 'react';
import axios from 'axios';

const perPage = 20
const base = 'https://pokeapi.co/api/v2/'


export function usePokemonList() {
    
        const [pokemons, setPokemons] = useState([])
        const [pokemonRow, setPokemonRow] = useState(perPage)

        useEffect( () => {
            async function fetchList() {
                const { data } = await axios.get(`${base}pokemon?limit=${pokemonRow}&offset=0`)
                .catch( (error) => { 
                    console.log(error)
                })
                console.log(base + 'pokemon?limit=' + pokemonRow + '&offset=0');
                const row = []
                data.results.map( element => {
                    row.push(element)
                })
                const freshState = [
                    [...pokemons]
                ]
                
    
                for(let i = 0; i < pokemonRow; i++) {
                    freshState.push(row[i])
                }
                console.log(freshState)
                setPokemons(freshState)
            }
            window.addEventListener('scroll', bottomList) 
            fetchList();
        }, [pokemonRow]);

        const bottomList = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement
            if (scrollHeight - scrollTop <= clientHeight) {
            setPokemonRow( pokemonRow => pokemonRow + 20)
            }
        }

    return pokemons;
}



