import React, { useEffect, useState } from 'react';
import { VStack, Flex, Heading, Spinner, HStack, Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading, getPokemons, getTotal } from 'store/pokedex/selectors';
import { getPokemonsRequest, getPokemonsByTypeRequest } from 'store/pokedex/actions';
import { NavigationButtons, SelectInput } from 'components';
import { language } from 'constant';
import { push } from 'redux-first-history';
import { getTypes } from 'store/app/selectors';
import { getTypesRequest } from 'store/app/actions';
import { getTypesOptions } from 'utils';

import PokemonCard from './PokemonCard';

const PokemonList = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector(getPokemons);
    const types = useSelector(getTypes);
    const isLoading = useSelector(getIsLoading);
    const total = useSelector(getTotal);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedType, setSelectedType] = useState(undefined);
    const [backSide, setBackSide] = useState(undefined);

    const handleChangePage = (page) => setCurrentPage(page);

    const handleChangeType = (e) => setSelectedType(e.target.value);

    useEffect(() => {
        dispatch(getTypesRequest());
    }, []);

    useEffect(() => {
        if (selectedType) {
            dispatch(getPokemonsByTypeRequest(selectedType));
        } else {
            dispatch(getPokemonsRequest({ page: currentPage }));
        }
    }, [selectedType]);

    useEffect(() => {
        dispatch(getPokemonsRequest({ page: currentPage }));
    }, [currentPage]);

    useEffect(() => {
    }, [backSide]);

    return (
        <VStack>
            <Heading color="#000">POKEMONS</Heading>
            {isLoading && <Spinner color="red" />}
            <HStack w="100%">
                <Box p={2} w={280}>
                    <SelectInput
                        noFormik
                        name="type"
                        label={language.type[process.env.REACT_APP_LANGUAGE] || 'Type'}
                        options={getTypesOptions(types)}
                        value={selectedType}
                        onChange={handleChangeType}
                    />
                </Box>
            </HStack>
            <Flex w="100%" wrap="wrap">
                {!isLoading && pokemons?.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.id}
                        {...{ pokemon, backSide, setBackSide }}
                        onExpand={() => dispatch(push(`/pokemon/${pokemon.id}`))}
                    />
                ))}
            </Flex>
            {!isLoading && <NavigationButtons total={total} currentPage={currentPage} onChange={handleChangePage} />}
        </VStack>
    );
};

export default PokemonList;
