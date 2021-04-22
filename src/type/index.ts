import React from 'react';

export type SafeReactChild = React.ReactChild | null | undefined;
export type SafeReactChildren = SafeReactChild | SafeReactChild[];

export interface ControlledFormValue<T> {
    value: T;
    onChange: (val: T) => void;
}
