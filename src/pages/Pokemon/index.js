import React, { useEffect } from 'react';
import { VStack, Text, HStack, Box, Heading, Spinner } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getStatsRequest } from 'store/app/actions';
import { getPokemonRequest } from 'store/pokedex/actions';
import { getStats } from 'store/app/selectors';
import { getIsLoading, getPokemon } from 'store/pokedex/selectors';
import { getStatName, getAbilityName } from 'utils';

const Pokemon = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const pokemon = useSelector(getPokemon);
    const stats = useSelector(getStats);
    const isLoading = useSelector(getIsLoading);

    useEffect(() => {
        dispatch(getStatsRequest());
        dispatch(getPokemonRequest(id));
    }, [id]);

    return (
        <VStack p={5}>
            {isLoading ? <Spinner color="red" /> : (
                <>
                    <HStack>
                        {pokemon.id && <Heading as="h1">{`${pokemon.id} ${pokemon.name}`}</Heading>}
                    </HStack>
                    <Box w="100%">
                        <Heading as="h3">Stats</Heading>
                        {pokemon.stats?.map((stat) => (
                            <HStack>
                                <Text fontSize="xl">{`${getStatName(stats, stat.stat)}:`}</Text>
                                <Text fontSize="xl">{stat.base_stat}</Text>
                            </HStack>
                        ))}
                        <Heading as="h3">Abilities</Heading>
                        {pokemon.abilities?.map((ability) => (
                            <HStack>
                                <Text fontSize="xl">{getAbilityName(ability)}</Text>
                            </HStack>
                        ))}
                    </Box>
                </>
            )}
        </VStack>
    );
};

export default Pokemon;
