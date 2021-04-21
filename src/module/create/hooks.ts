import Recoil from 'recoil'
import { CreateState } from 'module/create'
import type { State } from './type'

export const useCreateState = <T>(fn: (state: State) => T): T => {
    const state = Recoil.useRecoilValue(CreateState);
    return fn(state);
}