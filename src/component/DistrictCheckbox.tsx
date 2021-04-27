import React from 'react';
import { LocalStorageUtil, LocalStorageKey } from 'util/LocalStorageUtil';
import type { State as SettingDistrictState } from 'module/setting/district/type';
import { Checkbox, CheckboxGroup, Link } from '@chakra-ui/react';
import { HStack, Text } from '@chakra-ui/layout';
import { MTRUtil } from '../util/MTRUtil';
import { ControlledFormValue } from 'type';
import { District } from '../type/district';
import { NavLink } from 'react-router-dom';

interface Props extends ControlledFormValue<District[]> {}

export const DistrictCheckbox = React.memo(({ value, onChange }: Props) => {
    const list =
        LocalStorageUtil.getItem<SettingDistrictState>(LocalStorageKey.SETTING_DISTRICT)?.enabledDistrict ?? [];

    if (list.length === 0) {
        return (
            <Text>
                你仲未設定啓用邊幾個地區喎！
                <br />
                <Link to="/setting/district" as={NavLink} color="yellow.500">
                    按此
                </Link>
                設定番啦
            </Text>
        );
    }

    return (
        <CheckboxGroup value={value} onChange={onChange}>
            <HStack spacing={2} flexWrap="wrap">
                {list.map((_) => (
                    <Checkbox value={_} key={_}>
                        {MTRUtil.translate(_)}
                    </Checkbox>
                ))}
            </HStack>
        </CheckboxGroup>
    );
});
