import React from 'react';
import { Select, SelectProps } from '@chakra-ui/react';
import { ControlledFormValue } from 'type';
import { InitialNullable } from './InitialNullable';
import { SafeReactChild } from 'type';
import { Nullable } from './Nullable';

export interface BaseProps<Enum extends string | number> extends Omit<SelectProps, 'value' | 'onChange'> {
    list: readonly Enum[];
    translator?: (value: Enum) => SafeReactChild;
}

interface Props<Enum extends string | number> extends BaseProps<Enum>, ControlledFormValue<Enum> {}

export class EnumSelect<Enum extends string | number> extends React.PureComponent<Props<Enum>> {
    static InitialNullable = InitialNullable;
    static Nullable = Nullable;

    onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value as Enum;
        this.props.onChange(value);
    };

    getValue() {
        const value = this.props.value;
        if (value === null) {
            return undefined;
        }
        return value;
    }

    render() {
        const { list, translator = (_) => _ } = this.props;
        const mode = localStorage.getItem('chakra-ui-color-mode');
        const backgroundColor = mode === 'dark' ? 'gray.700' : 'white';
        return (
            <Select backgroundColor={backgroundColor} onChange={this.onChange} value={this.getValue()}>
                {list.map((option, index) => (
                    <option value={option} key={index}>
                        {translator(option)}
                    </option>
                ))}
            </Select>
        );
    }
}
