import { District } from 'type/district';
export interface State {
    enabledDistrict: District[];
    displayMode: DisplayMode;
}

export type DisplayMode = 'area' | 'line';
