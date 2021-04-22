import Recoil from 'recoil';
import { injectLifeCycle, useCoilState, useHistory } from 'coil-react';
import { Main } from './Main';
import type { State } from './type';
import type { Location } from 'history';
import { ObjectUtil } from 'jamyth-web-util';

const initialState: State = {};

const LOCAL_STORAGE_KEY = '@@EatWhatGoodSetting';

export const CommonSettingState = Recoil.atom({
    key: 'CommonSettingState',
    default: initialState,
});

export const useCommonSettingAction = () => {
    const { getState, setState } = useCoilState(CommonSettingState);
    const history = useHistory<any>();

    const onRouteMatched = (routeParameter: any, location: Location<Readonly<any> | undefined>) => {
        const rawSetting = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (!rawSetting) {
            setState(initialState);
        } else {
            setState(JSON.parse(rawSetting));
        }
    };

    const updateLocalStorage = () => {
        const setting = JSON.stringify(getState());
        localStorage.setItem(LOCAL_STORAGE_KEY, setting);
    };

    const updateSetting = (setting: Partial<State>) => {
        setState((state) => ObjectUtil.safeAssign(state, setting));
        updateLocalStorage();
    };

    const toggleTheme = () => {};

    return {
        onRouteMatched,
    };
};

export const MainComponent = injectLifeCycle<any, any>(Main, useCommonSettingAction);
