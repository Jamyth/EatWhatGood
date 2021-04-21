import { startApp, async } from 'coil-react';
import { useErrorHandler } from 'util/useErrorHandler';

const MainComponent = async(() => import('module/main'), 'MainComponent');

startApp({
    MainComponent,
    entryElement: document.getElementById('app'),
    useError: useErrorHandler,
});
