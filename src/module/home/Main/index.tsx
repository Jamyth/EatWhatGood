import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

export const Main = React.memo(() => {
    const backgroundColor = useColorModeValue('gray.100', 'gray.700');
    return (
        <Box>
            <Box h="20vh" p={12} backgroundColor={backgroundColor} shadow="md" borderRadius="0 0 15px 15px">
                blah blah blah
            </Box>
        </Box>
    );
});
