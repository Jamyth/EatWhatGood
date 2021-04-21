import React from 'react';
import { Button, useColorMode } from '@chakra-ui/react';

export const ThemeTogglor = React.memo(() => {
    const { toggleColorMode } = useColorMode();
    return (
        <Button onClick={toggleColorMode} position="fixed" bottom="100px" right="10px" zIndex={999}>
            Theme
        </Button>
    );
});
