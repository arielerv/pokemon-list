import { combineReducers } from 'redux';
import app from 'store/app/reducer';
import pokedex from 'store/pokedex/reducer';

const reducers = {
    app,
    pokedex,
};

const createRootReducer = (router) => combineReducers({
    router,
    ...reducers,
});

export default createRootReducer;
