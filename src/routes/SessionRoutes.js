import React from 'react';
import { Route, Routes } from 'react-router';
import Home from 'pages/Home';
import Pokemon from 'pages/Pokemon';

const WithSessionRoutes = () => (
    <Routes>
        <Route exact path="/pokemon/:id" element={<Pokemon />} />
        <Route index element={<Home />} />
    </Routes>
);

export default WithSessionRoutes;
