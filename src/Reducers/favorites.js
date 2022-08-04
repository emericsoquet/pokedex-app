import { REMOVE_FAVORITE, ADD_FAVORITE } from '../actions/types'

const initialState = []

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAVORITE:
            return [
                ...state,
                action.payload
            ]
        case REMOVE_FAVORITE: 
            const newBasket = state.filter(({ id }) => id !== action.payload);
            return newBasket;
        default:
            return state
    }
}

export default favoritesReducer