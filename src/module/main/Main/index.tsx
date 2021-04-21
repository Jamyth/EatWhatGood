import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { ErrorBoundary } from 'component/ErrorBoundary';
import { Router } from './Router';

export const Main = React.memo(() => {
    return (
        <ChakraProvider>
            <ErrorBoundary />
            <Router />
        </ChakraProvider>
    );
});
