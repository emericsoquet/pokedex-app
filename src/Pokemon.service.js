import { useState, useEffect } from 'react';
import axios from 'axios';

export function usePokemon(id) {

    const [pokemon, setPokemon] = useState([]);
    
    useEffect( () => {
        async function fetchList() {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            setPokemon( data );
        }
        fetchList();
    }, []);


    return pokemon;
}