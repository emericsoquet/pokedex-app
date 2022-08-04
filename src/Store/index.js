// dependencies
import thunk from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { useSelector } from 'react-redux';

// reducers
import favoritesReducer from '../Reducers/favorites';

// localStorage
import { loadState, saveState } from '../tools/localStorage.service';


const rootReducer = combineReducers({
    favorites: favoritesReducer
})

const persistedState = loadState();
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