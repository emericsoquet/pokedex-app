// dependencies
import thunk from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { useSelector } from 'react-redux';

// reducers
import favoritesReducer from '../Reducers/favorites';

// localStorage : appel du service
import { loadState, saveState } from '../tools/localStorage.service';

// ensemble des reducers de l'application
const rootReducer = combineReducers({
    favorites: favoritesReducer
})

const persistedState = loadState();
// création du store
const store = createStore(
    rootReducer, 
    persistedState
)

store.subscribe(() => {
    saveState({
      favorites: store.getState().favorites
    });
});

export default store