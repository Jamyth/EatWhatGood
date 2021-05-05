import React from 'react';
import { useToast } from '@chakra-ui/react';

export const CheckUpdate = React.memo(() => {
    const toast = useToast();

    React.useEffect(() => {
        (window as any)?.['isUpdateAvailable'].then((isAvailable: boolean) => {
            if (isAvailable) {
                toast({
                    description: '有新版本喇喎！',
                    position: 'bottom',
                    isClosable: true,
                    status: 'info',
                });
            }
        });
    });

    return null;
});
