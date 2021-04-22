import { startApp, async } from 'coil-react';
import { useErrorHandler } from 'util/useErrorHandler';

const MainComponent = async(() => import('module/main'), 'MainComponent');

startApp({
    MainComponent,
    entryElement: document.getElementById('app'),
    useError: useErrorHandler,
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then((registration) => {
                console.log('SW registered');
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
