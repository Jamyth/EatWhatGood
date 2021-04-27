import React from 'react';
import { Input, useColorModeValue } from '@chakra-ui/react';
import { ControlledFormValue } from 'jamyth-web-util';

interface Props extends ControlledFormValue<string | null> {}

export const NullableInput = React.memo(({ value, onChange }: Props) => {
    const backgroundColor = useColorModeValue('white', 'gray.700');

    const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        onChange(value.trim() ? value : null);
    };

    return <Input backgroundColor={backgroundColor} value={value || ''} onChange={onTextChange} />;
});
