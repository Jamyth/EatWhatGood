import { async } from 'coil-react';
import React from 'react';

export type Path = '/' | '/restaurant/:type(create|update)' | '/setting' | '/list' | '/draw' | '/setting/district';

interface Route {
    component: React.ComponentType;
}

export const NavigationService: Record<Path, Route> = {
    '/': {
        component: async(() => import('module/home'), 'MainComponent'),
    },
    '/restaurant/:type(create|update)': {
        component: async(() => import('module/restaurant'), 'MainComponent'),
    },
    '/setting': {
        component: async(() => import('module/common/setting'), 'MainComponent'),
    },
    '/setting/district': {
        component: async(() => import('module/setting/district'), 'MainComponent'),
    },
    '/list': {
        component: async(() => import('module/list'), 'MainComponent'),
    },
    '/draw': {
        component: async(() => import('module/draw'), 'MainComponent'),
    },
};
