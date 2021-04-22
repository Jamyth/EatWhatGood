import Recoil from 'recoil'
import { CommonSettingState } from 'module/common/setting'
import type { State } from './type'

export const useCommonSettingState = <T>(fn: (state: State) => T): T => {
    const state = Recoil.useRecoilValue(CommonSettingState);
    return fn(state);
}