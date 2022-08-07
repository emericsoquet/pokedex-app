// dependencies
import { useState, useEffect } from 'react';
import axios from 'axios';

// récupérer un pokémon depuis son id
export function usePokemon(id) {
    const [pokemon, setPokemon] = useState([]);
    useEffect( () => {
        async function fetchList() {
            if (id) {
                const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
                setPokemon( data );
            }
        }
        fetchList();
    }, []);
    return pokemon;
}

// récupérer d'autres informations sur un pokémon, toujours depuis son id
export function usePokemonDetails(id) {
    const [pokemon, setPokemon] = useState([]);
    useEffect( () => {
        async function fetchList() {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
            setPokemon( data );
        }
        fetchList();
    }, []);
    return pokemon;
}

// récupérer la chaîne d'évolution d'un pokémon depuis une url
export function useEvolutions(url) {
    const [evolutions, setEvolutions] = useState([]);
    useEffect( () => {
        async function fetchList() {
            if (url) {
                const { data } = await axios.get( url );
                setEvolutions( data );
            }
        }
        fetchList();
    }, []);
    return evolutions;
}

/* export function useEvolutionDetails(url) {
    const [pokemon, setPokemon] = useState([]);
    useEffect( () => {
        async function fetchList() {
            if (url) {
                const { data } = await axios.get(url);
                setPokemon( data );
            }
        }
        fetchList();
    }, []);
    return pokemon;
} */
