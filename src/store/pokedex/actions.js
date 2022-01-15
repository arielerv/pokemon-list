import * as types from 'store/pokedex/types';

export const getPokemonsRequest = (params) => ({ type: types.GET_POKEMONS_REQUEST, params });
export const getPokemonsSuccess = (pokemons, total) => ({ type: types.GET_POKEMONS_SUCCESS, pokemons, total });
export const getPokemonsError = (error) => ({ type: types.GET_POKEMONS_ERROR, error });

export const getPokemonRequest = (pokemonId) => ({ type: types.GET_POKEMON_REQUEST, pokemonId });
export const getPokemonSuccess = (pokemon) => ({ type: types.GET_POKEMON_SUCCESS, pokemon });
export const getPokemonError = (error) => ({ type: types.GET_POKEMON_ERROR, error });
