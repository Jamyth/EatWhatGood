import Recoil from 'recoil';
import { injectLifeCycle, useCoilState, useHistory } from 'coil-react';
import { Main } from './Main';
import type { State, RouteParameter, NullableRestaurant } from './type';
import type { Location } from 'history';
import type { Restaurant } from 'type/restaurant';
import { ObjectUtil } from 'jamyth-web-util';
import { LocalStorageKey, LocalStorageUtil } from '../../util/LocalStorageUtil';

const initialEditingData: NullableRestaurant = {
    name: null,
    district: [],
};

const initialState: State = {
    tab: 'create',
    editingData: initialEditingData,
    id: null,
};

export const RestaurantState = Recoil.atom({
    key: 'RestaurantState',
    default: initialState,
});

export const useRestaurantAction = () => {
    const { getState, setState } = useCoilState(RestaurantState);
    const history = useHistory<any>();

    const onRouteMatched = (
        routeParameter: RouteParameter,
        location: Location<Readonly<Restaurant & { id: string }> | undefined>,
    ) => {
        if (routeParameter.type === 'update') {
            const restaurant = location.state;
            if (!restaurant) {
                throw new Error('搵唔到餐廳啵');
            }
            setState((state) => {
                state.editingData = restaurant;
                state.id = restaurant.id;
            });
        } else {
            resetForm();
        }
    };

    const updateEditingData = (data: Partial<NullableRestaurant>) => {
        setState((state) => ObjectUtil.safeAssign(state.editingData, data));
    };

    const createOrUpdateRestaurant = () => {
        const { name, district } = getState().editingData;
        const id = getState().id;
        if (!name) {
            throw new Error('未寫咩名啵');
        }
        if (!district.length) {
            throw new Error('未揀咩地區喎');
        }
        const restaurants = LocalStorageUtil.getItem<Restaurant[]>(LocalStorageKey.RESTAURANT) ?? ([] as Restaurant[]);
        const _id = Date.now().toString();
        const item: Restaurant = {
            name,
            district,
        } as Restaurant;
        if (id) {
            const itemIndex = restaurants.findIndex((_) => _.id === id);
            if (itemIndex === -1) {
                item.id = _id;
                restaurants.push(item);
            }
            item.id = id;
            restaurants[itemIndex] = item;
        } else {
            item.id = _id;
            restaurants.push(item);
        }
        LocalStorageUtil.setItem(LocalStorageKey.RESTAURANT, JSON.stringify(restaurants));

        resetForm();
    };

    const resetForm = () => {
        setState((state) => (state.editingData = initialEditingData));
    };

    return {
        onRouteMatched,
        updateEditingData,
        createOrUpdateRestaurant,
        resetForm,
    };
};

export const MainComponent = injectLifeCycle<any, any>(Main, useRestaurantAction);
