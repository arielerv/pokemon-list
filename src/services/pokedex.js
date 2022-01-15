import http from 'services/http';

const getId = (pokemonUrl) => pokemonUrl.split('/')[6];

const pokedexService = {
    getPokemons: async ({ page }) => {
        const pageSize = parseInt(process.env.REACT_APP_PAGE_SIZE, 10);
        const offset = (page * pageSize) - pageSize;
        const { data } = await http.get(`/pokemon?limit=${pageSize}&offset=${offset}`);
        const pokemons = data.results;

        return {
            total: data.count,
            pokemons: pokemons.map((pokemon) => {
                const id = getId(pokemon.url);
                return {
                    ...pokemon,
                    id,
                    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
                };
            }),
        };
    },
    getPokemon: async (pokemonId) => {
        const { data } = await http.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const abilitiesPromises = data.abilities.map((ability) => http.get(ability.ability.url));
        return Promise.all(abilitiesPromises)
            .then((abilities) => ({ ...data, abilities: abilities.map((ability) => ability.data) }));
    },
    getPokemonsByType: async (selectedType) => {
        const { data } = await http.get(`https://pokeapi.co/api/v2/type/${selectedType}`);
        return {
            pokemons: data.pokemon.map((pokemon) => {
                const id = getId(pokemon.pokemon.url);
                return {
                    ...pokemon.pokemon,
                    id,
                    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
                };
            }),
        };
    },

};

export default pokedexService;
