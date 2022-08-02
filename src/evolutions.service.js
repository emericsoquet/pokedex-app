import { useState, useEffect } from 'react';
import axios from 'axios';

export function useEvolutions(id) {
    const [evolutions, setEvolutions] = useState([]);
    useEffect( () => {
        async function fetchList() {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/evolution-chain/${ id }`);
            setEvolutions( data );
        }
        fetchList();
    }, []);
    return evolutions;
}