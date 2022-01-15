import React from 'react';
import PropTypes from 'prop-types';
import { Button, Image, Text, VStack } from '@chakra-ui/react';

const PokemonCard = ({ pokemon, backSide, setBackSide, onExpand }) => (
    <VStack
        w="150px"
        role="button"
        key={pokemon.id}
        border="1px grey solid"
        onClick={() => setBackSide(backSide === pokemon.id ? undefined : pokemon.id)}
        h="190px"
    >
        {pokemon.id === backSide ? (
            <VStack align="center" justify="center" h="100%">
                <Text fontSize="xl">
                    {pokemon.id}
                </Text>
                <Button bg="lightBlue" type="button" onClick={onExpand}>
                    Expand
                </Button>
            </VStack>
        ) : (
            <>
                <Image
                    boxSize="150px"
                    objectFit="cover"
                    src={pokemon.image}
                    alt={pokemon.name}
                />
                <Text>{pokemon.name}</Text>
            </>
        )}
    </VStack>
);

PokemonCard.propTypes = {
    setBackSide: PropTypes.func.isRequired,
    onExpand: PropTypes.func.isRequired,
    pokemon: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        image: PropTypes.string,
    }).isRequired,
    backSide: PropTypes.number.isRequired,

};

export default PokemonCard;
