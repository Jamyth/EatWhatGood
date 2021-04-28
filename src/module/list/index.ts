import Recoil from 'recoil';
import { injectLifeCycle, useCoilState, useHistory } from 'coil-react';
import { Main } from './Main';
import type { State, Filter } from './type';
import type { Location } from 'history';
import { District } from 'type/district';
import { Restaurant } from 'type/restaurant';
import { LocalStorageKey, LocalStorageUtil } from 'util/LocalStorageUtil';
import { ArrayUtil, ObjectUtil } from 'jamyth-web-util';
import type { State as SettingDistrictState } from 'module/setting/district/type';

const initialFilter: Filter = {
    name: null,
    district: null,
};

const initialState: State = {
    enabledDistrict: [],
    restaurants: [],
    filter: initialFilter,
    openedItem: null,
};

export const ListState = Recoil.atom({
    key: 'ListState',
    default: initialState,
});

export const useListAction = () => {
    const { getState, setState } = useCoilState(ListState);
    const history = useHistory<Filter | Restaurant>();

    const onRouteMatched = (routeParameter: any, location: Location<Readonly<Filter> | undefined>) => {
        const filter = location.state ?? initialFilter;
        updateFilter(filter);
        getRestaurantData();
        getEnabledDistrict();
    };

    const pushFilterToHistory = (filter: Partial<Filter> = {}) => {
        const _filter: Filter = {
            ...getState().filter,
            ...filter,
        };
        history.pushHistory(_filter);
    };

    const updateFilter = (filter: Partial<Filter>) => {
        setState((state) => ObjectUtil.safeAssign(state.filter, filter));
    };

    const resetFilter = () => {
        pushFilterToHistory(initialFilter);
    };

    const openModal = (restaurant: Restaurant) => {
        setState((state) => (state.openedItem = restaurant));
    };

    const closeModal = () => {
        setState((state) => (state.openedItem = null));
    };

    const navigateToUpdate = () => {
        const openedItem = getState().openedItem;
        if (!openedItem) {
            return;
        }
        closeModal();
        history.pushHistory('/restaurant/update', openedItem);
    };

    const deleteRestaurant = () => {
        const openedItem = getState().openedItem;
        if (!openedItem) {
            return;
        }
        const fullRestaurantList =
            LocalStorageUtil.getItem<Restaurant[]>(LocalStorageKey.RESTAURANT) ?? ([] as Restaurant[]);

        const updatedList = fullRestaurantList.filter((_) => _.id !== openedItem.id);
        LocalStorageUtil.setItem(LocalStorageKey.RESTAURANT, JSON.stringify(updatedList));
        closeModal();
        getRestaurantData();
    };

    const getEnabledDistrict = () => {
        const district = getState().filter.district;
        const rawList =
            LocalStorageUtil.getItem<SettingDistrictState>(LocalStorageKey.SETTING_DISTRICT)?.enabledDistrict ??
            ([] as District[]);
        const enabledDistricts = rawList.filter((_) => (district ? _ === district : true));
        setState((state) => (state.enabledDistrict = enabledDistricts));
    };

    const getRestaurantData = () => {
        const { name, district } = getState().filter;
        const fullRestaurantList =
            LocalStorageUtil.getItem<Restaurant[]>(LocalStorageKey.RESTAURANT) ?? ([] as Restaurant[]);

        const filteredByName = fullRestaurantList.filter((_) => (name ? _.name.includes(name) : true));
        const filteredByDistrict = filteredByName.filter((_) => (district ? _.district.includes(district) : true));

        setState((state) => {
            state.restaurants = filteredByDistrict;
        });
    };

    return {
        onRouteMatched,
        pushFilterToHistory,
        updateFilter,
        resetFilter,
        openModal,
        closeModal,
        navigateToUpdate,
        deleteRestaurant,
    };
};

export const MainComponent = injectLifeCycle<any, Filter>(Main, useListAction);
