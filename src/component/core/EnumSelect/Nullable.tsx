import React from 'react';
import { EnumSelect, BaseProps } from '../EnumSelect';
import { ControlledFormValue } from 'type';

type NullType = '@@NULL';

export interface Props<Enum extends string | number> extends BaseProps<Enum>, ControlledFormValue<Enum | null> {
    nullText?: string;
}

export class Nullable<Enum extends string | number> extends React.PureComponent<Props<Enum>> {
    private readonly nullValue: NullType = '@@NULL';

    render() {
        const { value, onChange, list, nullText, translator = (_) => _ } = this.props;

        const wrappedValue = value === null ? this.nullValue : value;
        const wrappedOnChange = (value: Enum | NullType) => onChange(value === this.nullValue ? null : value);
        const wrappedList: (Enum | NullType)[] = [...list];
        wrappedList.splice(0, 0, this.nullValue);
        const wrappedTranslator = (value: Enum | NullType) =>
            value === this.nullValue ? nullText ?? '全部' : translator(value);

        return (
            <EnumSelect
                value={wrappedValue}
                onChange={wrappedOnChange}
                list={wrappedList}
                translator={wrappedTranslator}
            />
        );
    }
}
