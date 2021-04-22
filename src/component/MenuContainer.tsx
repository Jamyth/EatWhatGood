import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { SafeReactChildren } from 'type';

interface Props {
    children: SafeReactChildren;
}

export const MenuContainer = React.memo(({ children }: Props) => {
    const backgroundColor = useColorModeValue('gray.100', 'gray.700');
    return (
        <Box
            __css={{
                '.menu-item-container:last-child': {
                    '> .menu-item': {
                        borderBottomWidth: 0,
                    },
                },
            }}
            w="100%"
            borderTopWidth="1px"
            borderBottomWidth="1px"
            backgroundColor={backgroundColor}
        >
            {children}
        </Box>
    );
});
