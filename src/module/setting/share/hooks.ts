import Recoil from 'recoil'
import { SettingShareState } from 'module/setting/share'
import type { State } from './type'

export const useSettingShareState = <T>(fn: (state: State) => T): T => {
    const state = Recoil.useRecoilValue(SettingShareState);
    return fn(state);
}