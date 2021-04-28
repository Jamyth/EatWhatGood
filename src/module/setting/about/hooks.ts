import Recoil from 'recoil'
import { SettingAboutState } from 'module/setting/about'
import type { State } from './type'

export const useSettingAboutState = <T>(fn: (state: State) => T): T => {
    const state = Recoil.useRecoilValue(SettingAboutState);
    return fn(state);
}