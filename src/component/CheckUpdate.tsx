import React from 'react';
import { useToast } from '@chakra-ui/react';

export const CheckUpdate = React.memo(() => {
    const toast = useToast();

    const handleUpdate = async () => {
        if ('serviceWorker' in navigator) {
            let refreshing: boolean;
            const oldSw = (await navigator.serviceWorker.getRegistration())?.active?.state;
            navigator.serviceWorker.addEventListener('controllerchange', async () => {
                if (refreshing) return;

                // when the controllerchange event has fired, we get the new service worker
                const newSw = (await navigator.serviceWorker.getRegistration())?.active?.state;

                // if there was already an old activated service worker, and a new activating service worker, do the reload
                if (oldSw === 'activated' && newSw === 'activating') {
                    refreshing = true;
                    toast({
                        description: '有新版本喇喎！將自動更新',
                        position: 'bottom',
                        isClosable: true,
                        status: 'info',
                        duration: 3000,
                    });
                    setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                }
            });
        }
    };

    React.useEffect(() => {
        handleUpdate();
    });

    return null;
});
