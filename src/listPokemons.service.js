import { useState, useEffect } from 'react';
import axios from 'axios';

export function useListPokemons() {

    const [listPokemons, setListPokemons] = useState([]);

    useEffect( () => {
        async function fetchList() {
            const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/');
            setListPokemons(data.results);
        }
        fetchList();
    }, []); 


    return listPokemons;
}