import { useState, useEffect } from 'react';
import axios from 'axios';

export function useListPokemons() {
    const [listPokemons, setListPokemons] = useState([]);
    useEffect( () => {
        async function fetchList() {
            const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/');
            setListPokemons( data.results );
        }
        fetchList();
    }, []); 
    return listPokemons;
}

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

export function useEvolutionDetails(url) {
    const [pokemon, setPokemon] = useState([]);
    useEffect( () => {
        async function fetchList() {
            if (url) {
                const { data } = await axios.get(url);
                setPokemon( data );
            } else {
                console.log('NON CONNECTÉ')
            }
        }
        fetchList();
    }, []);
    return pokemon;
}

export function useEvolutions(url) {

    const [evolutions, setEvolutions] = useState([]);

    useEffect( () => {
        async function fetchList() {
            if (url) {
                const { data } = await axios.get( url );
                setEvolutions( data );
                console.log('CONNECTÉ')
            } else {
                console.log('NON CONNECTÉ')
            }
        }
        fetchList();
    }, []);
    return evolutions;
}