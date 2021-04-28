import { District } from 'type/district';
import { Restaurant } from 'type/restaurant';

export interface State {
    selectedDistrict: District | null;
    restaurant: Restaurant[];
}
