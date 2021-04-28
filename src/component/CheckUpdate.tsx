import React from 'react';
import { useToast } from '@chakra-ui/react';

export const CheckUpdate = React.memo(() => {
    const toast = useToast();

    React.useEffect(() => {
        (window as any)?.['isUpdateAvailable'].then((isAvailable: boolean) => {
            if (isAvailable) {
                toast({
                    description: 'New Update available !',
                    position: 'bottom',
                    isClosable: true,
                    status: 'info',
                });
            }
        });
    });

    return null;
});
