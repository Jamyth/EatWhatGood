import { async } from 'coil-react';
import React from 'react';

import { MainComponent as Home } from 'module/home';
import { MainComponent as Restaurant } from 'module/restaurant';
import { MainComponent as Setting } from 'module/common/setting';
import { MainComponent as SettingDistrict } from 'module/setting/district';
import { MainComponent as List } from 'module/list';
import { MainComponent as Draw } from 'module/draw';

export type Path = '/' | '/restaurant/:type(create|update)' | '/setting' | '/list' | '/draw' | '/setting/district';

interface Route {
    component: React.ComponentType;
}

export const NavigationService: Record<Path, Route> = {
    '/': {
        component: Home,
    },
    '/restaurant/:type(create|update)': {
        component: Restaurant,
    },
    '/setting': {
        component: Setting,
    },
    '/setting/district': {
        component: SettingDistrict,
    },
    '/list': {
        component: List,
    },
    '/draw': {
        component: Draw,
    },
};
