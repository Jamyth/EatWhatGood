import { Restaurant } from 'type/restaurant';

export type Nullable<T extends object> = { [P in keyof T]: T[P] | null };

export type NullableRestaurant = Omit<Restaurant, 'name' | 'id'> & { name: string | null };

export type TabType = 'create' | 'update';

export interface State {
    tab: TabType;
    editingData: NullableRestaurant;
    id: string | null;
}

export interface RouteParameter {
    type: TabType;
}
