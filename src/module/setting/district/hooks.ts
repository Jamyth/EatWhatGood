import Recoil from 'recoil'
import { SettingDistrictState } from 'module/setting/district'
import type { State } from './type'

export const useSettingDistrictState = <T>(fn: (state: State) => T): T => {
    const state = Recoil.useRecoilValue(SettingDistrictState);
    return fn(state);
}