import { District } from 'type/district';
import { Restaurant } from 'type/restaurant';
export interface State {
    enabledDistrict: District[];
    restaurants: Restaurant[];
    filter: Filter;
    openedItem: Restaurant | null;
}

export interface Filter {
    name: string | null;
    district: District | null;
}
