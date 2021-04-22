import Recoil from 'recoil';
import { injectLifeCycle, useCoilState, useHistory } from 'coil-react';
import { Main } from './Main';
import type { State, DisplayMode } from './type';
import type { Location } from 'history';
import { District } from 'type/district';
import { LocalStorageUtil, LocalStorageKey } from 'util/LocalStorageUtil';

const initialState: State = {
    enabledDistrict: [],
    displayMode: 'area',
};

export const SettingDistrictState = Recoil.atom({
    key: 'SettingDistrictState',
    default: initialState,
});

export const useSettingDistrictAction = () => {
    const { getState, setState } = useCoilState(SettingDistrictState);
    const history = useHistory<any>();

    const onRouteMatched = (routeParameter: any, location: Location<Readonly<any> | undefined>) => {
        const state = LocalStorageUtil.getItem<State>(LocalStorageKey.SETTING_DISTRICT) ?? initialState;
        setState(state);
    };

    const onSelectDistrict = (district: District) => {
        setState((state) => {
            if (state.enabledDistrict.includes(district)) {
                state.enabledDistrict = state.enabledDistrict.filter((_) => _ !== district);
            } else {
                state.enabledDistrict.push(district);
            }
        });
        updateLocalStorage();
    };

    const changeDisplayMode = (mode: DisplayMode) => {
        setState((state) => (state.displayMode = mode));
        updateLocalStorage();
    };

    const updateLocalStorage = () => {
        const state = JSON.stringify(getState());
        LocalStorageUtil.setItem(LocalStorageKey.SETTING_DISTRICT, state);
    };

    return {
        onRouteMatched,
        onSelectDistrict,
        changeDisplayMode,
    };
};

export const MainComponent = injectLifeCycle<any, any>(Main, useSettingDistrictAction);
