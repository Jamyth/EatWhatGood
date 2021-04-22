import Recoil from 'recoil';
import { injectLifeCycle, useCoilState, useHistory } from 'coil-react';
import { Main } from './Main';
import type { State } from './type';
import type { Location } from 'history';
import { LocalStorageUtil, LocalStorageKey } from 'util/LocalStorageUtil';
import { ObjectUtil } from 'jamyth-web-util';

const initialState: State = {
    selectedDistrict: null,
};

export const HomeState = Recoil.atom({
    key: 'HomeState',
    default: initialState,
});

export const useHomeAction = () => {
    const { getState, setState } = useCoilState(HomeState);
    const history = useHistory<any>();

    const onRouteMatched = (routeParameter: any, location: Location<Readonly<any> | undefined>) => {
        const state = LocalStorageUtil.getItem<State>(LocalStorageKey.HOME) ?? initialState;
        setState(state);
    };

    const updateState = (partialState: Partial<State>) => {
        setState((state) => ObjectUtil.safeAssign(state, partialState));
        LocalStorageUtil.setItem(LocalStorageKey.HOME, JSON.stringify(getState()));
    };

    return {
        onRouteMatched,
        updateState,
    };
};

export const MainComponent = injectLifeCycle<any, any>(Main, useHomeAction);
