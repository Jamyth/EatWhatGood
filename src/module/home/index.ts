import Recoil from 'recoil';
import { injectLifeCycle, useCoilState, useHistory } from 'coil-react';
import { Main } from './Main';
import type { State } from './type';
import type { Location } from 'history';
import { LocalStorageUtil, LocalStorageKey } from 'util/LocalStorageUtil';
import { ObjectUtil } from 'jamyth-web-util';
import { District } from 'type/district';
import { Restaurant } from 'type/restaurant';

const initialState: State = {
    selectedDistrict: null,
    restaurant: [],
};

export const HomeState = Recoil.atom({
    key: 'HomeState',
    default: initialState,
});

export const useHomeAction = () => {
    const { getState, setState } = useCoilState(HomeState);
    const history = useHistory<any>();

    const onMount = () => {
        const selectedDistrict = LocalStorageUtil.getItem<District | null>(LocalStorageKey.HOME);
        const restaurant = LocalStorageUtil.getItem<Restaurant[]>(LocalStorageKey.RESTAURANT) ?? ([] as Restaurant[]);
        setState((state) => {
            state.selectedDistrict = selectedDistrict;
            state.restaurant = restaurant;
        });
    };

    const updateState = (partialState: Partial<State>) => {
        setState((state) => ObjectUtil.safeAssign(state, partialState));
        LocalStorageUtil.setItem(LocalStorageKey.HOME, JSON.stringify(getState().selectedDistrict));
    };

    return {
        onMount,
        updateState,
    };
};

export const MainComponent = injectLifeCycle<any, any>(Main, useHomeAction);
