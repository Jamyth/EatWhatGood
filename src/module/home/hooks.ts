import Recoil from 'recoil'
import { HomeState } from 'module/home'
import type { State } from './type'

export const useHomeState = <T>(fn: (state: State) => T): T => {
    const state = Recoil.useRecoilValue(HomeState);
    return fn(state);
}