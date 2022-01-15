import React, { useEffect, useState } from 'react';
import { VStack, Flex, Heading, Spinner } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading, getPokemons, getTotal } from 'store/pokedex/selectors';
import { getPokemonsRequest } from 'store/pokedex/actions';
import { NavigationButtons } from 'components';
import { push } from 'redux-first-history';

import PokemonCard from './PokemonCard';

const Home = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector(getPokemons);
    const isLoading = useSelector(getIsLoading);
    const total = useSelector(getTotal);
    const [currentPage, setCurrentPage] = useState(1);
    const [backSide, setBackSide] = useState(undefined);

    const handleChange = (page) => setCurrentPage(page);

    useEffect(() => {
        dispatch(getPokemonsRequest({ page: currentPage }));
    }, [currentPage]);

    useEffect(() => {
    }, [backSide]);

    return (
        <VStack>
            <Heading color="#000">POKEMONS</Heading>
            {isLoading && <Spinner color="red" />}
            <Flex w="100%" wrap="wrap">
                {!isLoading && pokemons?.map((pokemon) => (
                    <PokemonCard
                        {...{ pokemon, backSide, setBackSide }}
                        onExpand={() => dispatch(push(`/pokemon/${pokemon.id}`))}
                    />
                ))}
            </Flex>
            {!isLoading && <NavigationButtons total={total} currentPage={currentPage} onChange={handleChange} />}
        </VStack>
    );
};

export default Home;
