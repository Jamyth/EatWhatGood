import Recoil from 'recoil'
import { DrawState } from 'module/draw'
import type { State } from './type'

export const useDrawState = <T>(fn: (state: State) => T): T => {
    const state = Recoil.useRecoilValue(DrawState);
    return fn(state);
}