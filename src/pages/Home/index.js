import React from 'react';
import { VStack, Button, Image, Box } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { push } from 'redux-first-history';
import { routes } from 'constant';
import pokemonLogo from 'assets/pokemon-logo.png';

const Home = () => {
    const dispatch = useDispatch();

    const getData = () => dispatch(push(routes.POKEMON_LIST));

    return (
        <VStack bg="black" height="100vh">
            <Box mt="100px" mb="100px">
                <Image src={pokemonLogo} width="600px" height="200px" />
            </Box>
            <Button type="button" bg="#2B65EC" onClick={getData}>
                Go to de pokemons list
            </Button>
        </VStack>
    );
};

export default Home;
