import { startApp, async } from 'coil-react';
import { useErrorHandler } from 'util/useErrorHandler';

const MainComponent = async(() => import('module/main'), 'MainComponent');

startApp({
    MainComponent,
    entryElement: document.getElementById('app'),
    useError: useErrorHandler,
});

(window as any).isUpdateAvailable = new Promise((resolve, reject) => {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker
                .register('/service-worker.js')
                .then((registration) => {
                    console.log('SW registered');

                    registration.onupdatefound = () => {
                        const installingWorker = registration.installing;
                        if (installingWorker) {
                            installingWorker.onstatechange = () => {
                                switch (installingWorker.state) {
                                    case 'installed':
                                        if (navigator.serviceWorker.controller) {
                                            // new update available
                                            resolve(true);
                                        } else {
                                            // no update available
                                            resolve(false);
                                        }
                                        break;
                                }
                            };
                        }
                    };
                })
                .catch((registrationError) => {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }
});
