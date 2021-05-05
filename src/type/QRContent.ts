import type { Restaurant } from './restaurant';

export type EatWhatGoodKey = '@@EatWhatGood';

export interface QRContent {
    key: EatWhatGoodKey;
    restaurants: Omit<Restaurant, 'id'>[];
}
