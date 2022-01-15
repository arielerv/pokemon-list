import React from 'react';
import { Route, Routes } from 'react-router';
import PokemonList from 'pages/PokemonList';
import Pokemon from 'pages/Pokemon';
import Home from 'pages/Home';

const WithSessionRoutes = () => (
    <Routes>
        <Route exact path="/pokemon/:id" element={<Pokemon />} />
        <Route exact path="/pokemons" element={<PokemonList />} />
        <Route index element={<Home />} />
    </Routes>
);

export default WithSessionRoutes;
