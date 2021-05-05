import Recoil from 'recoil';
import { injectLifeCycle, useCoilState, useHistory } from 'coil-react';
import { Main } from './Main';
import type { State } from './type';
import type { QRContent } from 'type/QRContent';
import { LocalStorageKey, LocalStorageUtil } from 'util/LocalStorageUtil';
import { Restaurant } from 'type/restaurant';
import { CreateQRCodeHashAJAXRequest } from 'type/api';
import { ShareAJAXService } from '../../../util/service/ShareAJAXService';

const initialState: State = {
    selectedRestaurant: [],
    qrContent: null,
};

export const SettingShareState = Recoil.atom({
    key: 'SettingShareState',
    default: initialState,
});

export const useSettingShareAction = () => {
    const { getState, setState } = useCoilState(SettingShareState);
    const history = useHistory<any>();

    const onMount = () => {
        setState((state) => (state.selectedRestaurant = []));
    };

    const updateSelectedRestaurant = (restaurant: string[]) => {
        setState((state) => (state.selectedRestaurant = restaurant));
    };

    const generateQRCode = async () => {
        const restaurantNames = getState().selectedRestaurant;
        if (!restaurantNames.length) {
            throw new Error('至少要揀一間餐廳 Share 啵');
        }
        const restaurants = (LocalStorageUtil.getItem<Restaurant[]>(LocalStorageKey.RESTAURANT) ?? [])
            .filter((_) => restaurantNames.includes(_.name))
            .map(({ name, ...rest }) => ({
                ...rest,
                name: convertToUnicode(name),
            }));

        const request: CreateQRCodeHashAJAXRequest = {
            restaurants,
        };

        const qrContent = await ShareAJAXService.createQRCodeHash(request);

        setState((state) => (state.qrContent = qrContent));
    };

    const convertToUnicode = (name: string) => {
        const unicodes = name.split('').map((_, i) => `00${name.charCodeAt(i).toString(16)}`.slice(-4));
        return `\\u${unicodes.join('\\u')}`;
    };

    const clearQRContent = () => {
        setState((state) => (state.qrContent = null));
    };

    return {
        onMount,
        updateSelectedRestaurant,
        generateQRCode,
        clearQRContent,
    };
};

export const MainComponent = injectLifeCycle<any, any>(Main, useSettingShareAction);
