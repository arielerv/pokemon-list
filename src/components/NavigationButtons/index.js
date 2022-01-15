import React from 'react';
import PropTypes from 'prop-types';
import { HStack, IconButton, Text, VStack } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const NavigationButtons = ({ total, currentPage, onChange }) => {
    const pages = Math.ceil(total / process.env.REACT_APP_PAGE_SIZE) || 0;

    return (
        <VStack pt={5}>
            <HStack>
                <IconButton
                    type="button"
                    icon={<FaChevronLeft />}
                    aria-label="left"
                    isDisabled={currentPage <= 1}
                    onClick={() => onChange(currentPage - 1)}
                    color="blue"
                />
                <Text bg="lightBlue" color="white" p="2px 8px" borderRadius={5}>{currentPage}</Text>
                <IconButton
                    type="button"
                    icon={<FaChevronRight />}
                    aria-label="right"
                    isDisabled={currentPage >= pages}
                    onClick={() => onChange(currentPage + 1)}
                    color="blue"
                />
            </HStack>
            <Text style={{ margin: 0 }} fontWeight="bold">{total}</Text>
        </VStack>
    );
};

NavigationButtons.propTypes = {
    total: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default NavigationButtons;
