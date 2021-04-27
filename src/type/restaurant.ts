import type { District } from './district';

export interface Restaurant {
    id: string;
    name: string;
    district: District[];
}
