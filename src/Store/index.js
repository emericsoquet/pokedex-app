import thunk from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux';
import favoritesReducer from '../Reducers/favorites';

const rootReducer = combineReducers({
    favorites: favoritesReducer
})


const store = createStore(
    rootReducer, 
    applyMiddleware(thunk)
)

export default store