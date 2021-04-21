import Recoil from 'recoil'
import { SettingState } from 'module/setting'
import type { State } from './type'

export const useSettingState = <T>(fn: (state: State) => T): T => {
    const state = Recoil.useRecoilValue(SettingState);
    return fn(state);
}