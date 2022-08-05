import { REMOVE_FAVORITE, ADD_FAVORITE } from '../actions/types'

const initialState = []

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAVORITE:
            return [...state, action.payload]
        case REMOVE_FAVORITE: 
            const newFavorite = state.filter(( pokemon ) => pokemon.id !== action.payload);
            console.log('RETIRÉ DU POKÉDEX')
            return newFavorite;
        default:
            return state
    }
}

export default favoritesReducer