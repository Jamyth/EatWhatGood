import React from 'react';
import { Select, SelectProps } from '@chakra-ui/react';
import { ControlledFormValue } from 'type';
import { InitialNullable } from './InitialNullable';

export interface BaseProps<Enum extends string | number> extends Omit<SelectProps, 'value' | 'onChange'> {
    list: readonly Enum[];
    translator?: (value: Enum) => string;
}

interface Props<Enum extends string | number> extends BaseProps<Enum>, ControlledFormValue<Enum> {}

export class EnumSelect<Enum extends string | number> extends React.PureComponent<Props<Enum>> {
    static InitialNullable = InitialNullable;

    onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value as Enum;
        this.props.onChange(value);
    };

    getValue() {
        const value = this.props.value;
        if (value === null) {
            return 'undefined';
        }
        return value;
    }

    render() {
        const { list, translator = (_) => _ } = this.props;
        return (
            <Select onChange={this.onChange} value={this.getValue()}>
                <option value={'undefined'} disabled>
                    請選擇
                </option>
                {list.map((option, index) => (
                    <option value={option} key={index}>
                        {translator(option)}
                    </option>
                ))}
            </Select>
        );
    }
}
