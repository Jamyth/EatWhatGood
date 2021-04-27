import Recoil from 'recoil'
import { RestaurantState } from 'module/restaurant'
import type { State } from './type'

export const useRestaurantState = <T>(fn: (state: State) => T): T => {
    const state = Recoil.useRecoilValue(RestaurantState);
    return fn(state);
}