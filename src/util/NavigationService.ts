import { async } from 'coil-react';
import React from 'react';

export type Path = '/' | '/create' | '/setting';

interface Route {
    component: React.ComponentType;
}

export const NavigationService: Record<Path, Route> = {
    '/': {
        component: async(() => import('module/home'), 'MainComponent'),
    },
    '/create': {
        component: async(() => import('module/create'), 'MainComponent'),
    },
    '/setting': {
        component: async(() => import('module/setting'), 'MainComponent'),
    },
};
