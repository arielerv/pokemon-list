import initialState from 'store/pokedex/initialState';
import * as types from 'store/pokedex/types';

export default function pokedex(state = initialState, action) {
    switch (action.type) {
        case types.GET_POKEMONS_REQUEST:
            return { ...state, isLoading: true, pokemons: initialState.pokemons };
        case types.GET_POKEMONS_SUCCESS:
            return { ...state, pokemons: action.pokemons, total: action.total, isLoading: false };
        case types.GET_POKEMONS_ERROR:
            return { ...state, isLoading: false, error: action.error };
        case types.GET_POKEMON_REQUEST:
            return { ...state, isLoading: true, pokemon: initialState.pokemon };
        case types.GET_POKEMON_SUCCESS:
            return { ...state, pokemon: action.pokemon, total: action.total, isLoading: false };
        case types.GET_POKEMON_ERROR:
            return { ...state, isLoading: false, error: action.error };
        default:
            return state;
    }
}
