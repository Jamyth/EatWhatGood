import Recoil from 'recoil';
import { injectLifeCycle, useCoilState } from 'coil-react';
import { Main } from './Main';
import type { State } from './type';
import { QRContent } from 'type/QRContent';
import { useToast } from '@chakra-ui/react';
import { Restaurant } from 'type/restaurant';
import { LocalStorageUtil, LocalStorageKey } from 'util/LocalStorageUtil';
import { ShareAJAXService } from '../../../util/service/ShareAJAXService';
import { District } from 'type/district';

const initialState: State = {
    selectedRestaurants: [],
    content: null,
    useImage: false,
};

export const SettingScanState = Recoil.atom({
    key: 'SettingScanState',
    default: initialState,
});

export const useSettingScanAction = () => {
    const { getState, setState } = useCoilState(SettingScanState);
    const toast = useToast();

    const onMount = () => {
        setState(initialState);
    };

    const updateSelectedRestaurant = (restaurant: string[]) => {
        setState((state) => (state.selectedRestaurants = restaurant));
    };

    const updateReadMode = () => {
        setState((state) => (state.useImage = !state.useImage));
    };

    const resetContent = () => {
        setState((state) => (state.content = null));
    };

    const saveToLocalStorage = () => {
        const json = getState().content;
        if (!json) {
            return;
        }
        const selectedRestaurants = getState().selectedRestaurants;
        const list = LocalStorageUtil.getItem<Restaurant[]>(LocalStorageKey.RESTAURANT) ?? [];
        if (!selectedRestaurants.length) {
            throw new Error('至少要選擇一間餐廳保存喔');
        }
        const restaurants = json.restaurants.filter((_) => selectedRestaurants.includes(_.name));

        for (const restaurant of restaurants) {
            const isExist = list.find((_) => _.name === restaurant.name);
            if (isExist) {
                const index = list.indexOf(isExist);
                const newItem = { ...isExist };
                const district = [...new Set([...newItem.district, ...restaurant.district])];
                newItem.district = district as District[];
                list[index] = newItem;
            } else {
                const id = Date.now().toString();
                list.push({
                    id,
                    ...(restaurant as Omit<Restaurant, 'id'>),
                });
            }
        }

        setState((state) => (state.selectedRestaurants = []));

        LocalStorageUtil.setItem(LocalStorageKey.RESTAURANT, JSON.stringify(list));
        toast({
            status: 'success',
            description: `已保存${selectedRestaurants.length}間新餐廳了！`,
            isClosable: true,
            duration: 5000,
            position: 'top',
        });
    };

    const updateContent = async (url: string) => {
        const content = await ShareAJAXService.getRestaurantByQRCode(url);
        const restaurants = content.restaurants.map(({ name, ...rest }) => ({
            ...rest,
            name: unicodeToString(name),
        }));
        setState((state) => (state.content = { restaurants }));
    };

    const unicodeToString = (unicode: string) => {
        unicode = unicode.replace(/(\\u)(\w{1,4})/gi, function (v) {
            return String.fromCharCode(parseInt(escape(v).replace(/(%5Cu)(\w{1,4})/g, '$2'), 16));
        });
        unicode = unicode.replace(/(&#x)(\w{1,4});/gi, function (v) {
            return String.fromCharCode(parseInt(escape(v).replace(/(%26%23x)(\w{1,4})(%3B)/g, '$2'), 16));
        });
        unicode = unicode.replace(/(&#)(\d{1,6});/gi, function (v) {
            return String.fromCharCode(parseInt(escape(v).replace(/(%26%23)(\d{1,6})(%3B)/g, '$2')));
        });

        return unicode;
    };

    return {
        onMount,
        updateSelectedRestaurant,
        saveToLocalStorage,
        updateContent,
        updateReadMode,
        resetContent,
    };
};

export const MainComponent = injectLifeCycle<any, any>(Main, useSettingScanAction);
