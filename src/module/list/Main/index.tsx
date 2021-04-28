import { Box, Flex, FormControl, FormLabel, Heading } from '@chakra-ui/react';
import React from 'react';
import { Filter } from './Filter';
import { RestaurantList } from './RestaurantList';

export const Main = React.memo(() => {
    return (
        <Flex flexDirection="column" flex={1} overflowY="scroll" maxH="calc(100vh - 90px)">
            <Box mt={14} px={4} pb={4}>
                <Heading>餐廳列表</Heading>
                <Filter />
            </Box>
            <RestaurantList />
        </Flex>
    );
});
