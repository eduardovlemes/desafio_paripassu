import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
});

export const getPokemons = async () => {
    try {
        const response = await api.get("pokemon?limit=20");

        if (response.status !== 200) {
            throw new Error("Dados não encontrados.");
        }

        const { results: apiResults } = response.data;
        const getPokemonData = apiResults.map((result) => api.get(result.url));
        const responses = await Promise.allSettled(getPokemonData);
        const filteredByComplete = responses.filter((response) => response.status === 'fulfilled');
        const pokemonsUrls = filteredByComplete.map((url) => url.value.data);

        return await Promise.all(pokemonsUrls);

    } catch (error) {
        throw new Error("Não foi possível encontrar Pokemons: " + error);
    }
};

export const getPokemon = async (term) => {
    try {
        const response = await api.get(`pokemon/${term}`);

        if (response.status !== 200) {
            throw new Error("Dados não encontrados.");
        }

        return await response.data;

    } catch (error) {
        throw new Error("Não foi possível encontrar Pokemons: " + error);
    }
};
