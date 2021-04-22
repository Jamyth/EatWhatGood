import Recoil from 'recoil';
import { injectLifeCycle, useCoilState, useHistory } from 'coil-react';
import { Main } from './Main'
import type { State } from './type';
import type { Location } from 'history'

const initialState: State = {}

export const DrawState = Recoil.atom({
    key: "DrawState",
    default: initialState
});

export const useDrawAction = () => {
    const { getState, setState } = useCoilState(DrawState);
    const history = useHistory<any>();

    const onMount = () => {
        // TODO
    }

    const onRouteMatched = (routeParameter: any, location: Location<Readonly<any> | undefined>) => {
        // TODO
    }

    return {
        onMount,
        onRouteMatched
    }
}

export const MainComponent = injectLifeCycle<any, any>(Main, useDrawAction)