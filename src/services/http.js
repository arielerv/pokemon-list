import axios from 'axios';

const http = axios.create({
    baseURL: process.env.REACT_APP_ENDPOINT_POKEAPI,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

export default http;
