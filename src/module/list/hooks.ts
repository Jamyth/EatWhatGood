import Recoil from 'recoil'
import { ListState } from 'module/list'
import type { State } from './type'

export const useListState = <T>(fn: (state: State) => T): T => {
    const state = Recoil.useRecoilValue(ListState);
    return fn(state);
}