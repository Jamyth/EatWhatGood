import { async } from 'coil-react';
import React from 'react';

import { MainComponent as Home } from 'module/home';
import { MainComponent as Restaurant } from 'module/restaurant';
import { MainComponent as Setting } from 'module/common/setting';
import { MainComponent as SettingDistrict } from 'module/setting/district';
import { MainComponent as List } from 'module/list';
import { MainComponent as About } from 'module/setting/about';

export type Path =
    | '/'
    | '/restaurant/:type(create|update)'
    | '/setting'
    | '/list'
    | '/setting/district'
    | '/setting/about';

interface Route {
    component: React.ComponentType;
}

export const NavigationService: Record<Path, Route> = {
    '/': {
        component: Home,
        // component: async(() => import('module/home'), 'MainComponent'),
    },
    '/restaurant/:type(create|update)': {
        component: Restaurant,
        // component: async(() => import('module/restaurant'), 'MainComponent'),
    },
    '/setting': {
        component: Setting,
        // component: async(() => import('module/common/setting'), 'MainComponent'),
    },
    '/setting/district': {
        component: SettingDistrict,
        // component: async(() => import('module/setting/district'), 'MainComponent'),
    },
    '/list': {
        component: List,
        // component: async(() => import('module/list'), 'MainComponent'),
    },
    '/setting/about': {
        component: About,
        // component: async(() => import('module/list'), 'MainComponent'),
    },
};
