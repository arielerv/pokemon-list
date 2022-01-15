import http from 'services/http';

const appService = {
    getStats: async () => {
        const { data } = await http.get('https://pokeapi.co/api/v2/stat');
        const statsPromises = data.results.map((result) => http.get(result.url));
        return Promise.all(statsPromises)
            .then((stats) => stats.map((stat) => stat.data));
    },
};

export default appService;
