import { REMOVE_FAVORITE, ADD_FAVORITE } from '../actions/types'

// initialisation du state en tableau
const initialState = []

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAVORITE: // ajout de favori
            return [...state, action.payload] // on retourne l'ancien tableau + nouvelle instance
        case REMOVE_FAVORITE: // retrait d'un favori
            // dans le tableau, on filtre et on accepte tous les pokémons qui n'ont pas l'id sélectionné
            const newFavorite = state.filter(( pokemon ) => pokemon.id !== action.payload);
            return newFavorite;
        default:
            return state
    }
}

export default favoritesReducer