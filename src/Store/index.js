// dependencies
import { combineReducers, createStore } from 'redux';

// reducers
import favoritesReducer from '../Reducers/favorites';

// localStorage : appel du service
import { loadState, saveState } from '../tools/localStorage.service';

// ensemble des reducers de l'application
const rootReducer = combineReducers({
    favorites: favoritesReducer
})

// utilisé pour localStorage, dès qu'on utilise setState
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