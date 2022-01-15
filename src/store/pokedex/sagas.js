import {
    all, call, put, takeLatest,
} from 'redux-saga/effects';
import * as actions from 'store/pokedex/actions';
import * as types from 'store/pokedex/types';
import PokedexService from 'services/pokedex';

export function* getPokemons({ params }) {
    try {
        const { pokemons, total } = yield call(PokedexService.getPokemons, params);
        yield put(actions.getPokemonsSuccess(pokemons, total));
    } catch (error) {
        yield put(actions.getPokemonsError('Falló!'));
    }
}

export function* getPokemon({ pokemonId }) {
    try {
        const result = yield call(PokedexService.getPokemon, pokemonId);
        yield put(actions.getPokemonSuccess(result));
    } catch (error) {
        yield put(actions.getPokemonError('Falló!'));
    }
}

export function* pokedexSaga() {
    yield all([
        takeLatest(types.GET_POKEMONS_REQUEST, getPokemons),
        takeLatest(types.GET_POKEMON_REQUEST, getPokemon),
    ]);
}

export default pokedexSaga;
