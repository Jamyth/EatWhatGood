import { Box } from '@chakra-ui/layout';
import React from 'react';
import { useListState } from '../../hooks';
import { ListItem } from './ListItem';

export const RestaurantList = React.memo(() => {
    const restaurant = useListState((state) => state.restaurants);
    const enabledDistrict = [...new Set(restaurant.flatMap((_) => _.district))];
    return (
        <Box maxH="50vh" overflowY="scroll">
            {enabledDistrict.map((_) => (
                <ListItem district={_} key={_} />
            ))}
        </Box>
    );
});
