import http from 'services/http';
import { setKeyData } from 'services/storage';

const appService = {
    getStats: async () => {
        const { data } = await http.get('https://pokeapi.co/api/v2/stat');
        const statsPromises = data.results.map((result) => http.get(result.url));
        return Promise.all(statsPromises).then((stats) => stats.map((stat) => stat.data));
    },
    getTypes: async () => {
        const { data } = await http.get('https://pokeapi.co/api/v2/type');
        const typesPromises = data.results.map((result) => http.get(result.url));
        return Promise.all(typesPromises).then((types) => types.map((type) => type.data));
    },
    getData: async () => {
        const { data } = await http.get('https://pokeapi.co/api/v2/');
        for (const datum of Object.entries(data)) {
            // eslint-disable-next-line no-await-in-loop
            const result = await http.get(`${datum[1]}?limit=100000`);
            setKeyData(datum[0], result.data);

            for (const fact of result.data.results) {
                const index = result.data.results.indexOf(fact);
                // eslint-disable-next-line no-await-in-loop
                const resultFact = await http.get(fact.url);
                setKeyData(fact.name ? `${datum[0]}-${fact.name}` : `${datum[0]}-${index}`, resultFact.data);
            }
        }
        return data;
    },
};

export default appService;
