import React from 'react';
import { EnumSelect } from '../EnumSelect';
import type { BaseProps } from '../EnumSelect';

interface Props<Enum extends string | number> extends BaseProps<Enum> {
    value: Enum | null;
    onChange: (value: Enum) => void;
}

export class InitialNullable<Enum extends string | number> extends React.PureComponent<Props<Enum>> {
    render() {
        const { value, ...props } = this.props;

        const wrappedValue = value as Enum;

        return <EnumSelect value={wrappedValue} {...props} />;
    }
}
