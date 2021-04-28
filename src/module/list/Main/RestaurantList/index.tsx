import { Box } from '@chakra-ui/layout';
import React from 'react';
import { useListState } from '../../hooks';
import { ListItem } from './ListItem';

export const RestaurantList = React.memo(() => {
    const enabledDistrict = useListState((state) => state.enabledDistrict);
    return (
        <Box maxH="50vh" overflowY="scroll">
            {enabledDistrict.map((_) => (
                <ListItem district={_} />
            ))}
        </Box>
    );
});
