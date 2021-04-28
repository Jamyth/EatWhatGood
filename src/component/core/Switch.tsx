import React from 'react';
import { Switch as ChakraSwitch, SwitchProps } from '@chakra-ui/react';
import type { ControlledFormValue } from 'type';

interface Props extends ControlledFormValue<boolean> {}

export const Switch = React.memo(({ value, onChange }: Props) => {
    const onCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.checked);
    };

    return <ChakraSwitch size="lg" isChecked={value} onChange={onCheck} />;
});
