import Recoil from 'recoil'
import { SettingScanState } from 'module/setting/scan'
import type { State } from './type'

export const useSettingScanState = <T>(fn: (state: State) => T): T => {
    const state = Recoil.useRecoilValue(SettingScanState);
    return fn(state);
}