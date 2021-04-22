import React from 'react';
import { Switch as ChakraSwitch, SwitchProps } from '@chakra-ui/react';
import type { ControlledFormValue } from 'type';

interface Props extends ControlledFormValue<boolean>, Omit<SwitchProps, 'value' | 'onChange'> {}

export const Switch = React.memo(({ value, onChange, ...props }: Props) => {
    const onCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.checked);
    };

    return <ChakraSwitch isChecked={value} onChange={onCheck} {...props} />;
});
