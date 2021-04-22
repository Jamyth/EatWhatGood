import Recoil from 'recoil';
import { injectLifeCycle, useCoilState, useHistory } from 'coil-react';
import { Main } from './Main';
import type { State } from './type';
import type { Location } from 'history';
import { District } from 'type/district';

const initialState: State = {
    enabledDistrict: [],
};

const LOCAL_STORAGE_KEY = '@@EatWhatGood_SETTING_DISTRICT';

export const SettingDistrictState = Recoil.atom({
    key: 'SettingDistrictState',
    default: initialState,
});

export const useSettingDistrictAction = () => {
    const { getState, setState } = useCoilState(SettingDistrictState);
    const history = useHistory<any>();

    const onRouteMatched = (routeParameter: any, location: Location<Readonly<any> | undefined>) => {
        const rawState = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (rawState) {
            setState(JSON.parse(rawState));
        } else {
            setState(initialState);
        }
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

    const updateLocalStorage = () => {
        const state = JSON.stringify(getState());
        localStorage.setItem(LOCAL_STORAGE_KEY, state);
    };

    return {
        onRouteMatched,
        onSelectDistrict,
    };
};

export const MainComponent = injectLifeCycle<any, any>(Main, useSettingDistrictAction);
