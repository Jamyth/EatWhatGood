import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { District } from 'type/district';
import { MenuContainer } from 'component/MenuContainer';
import { MenuItem } from 'component/MenuItem';
import { Switch } from 'component/core/Switch';
import { useSettingDistrictState } from '../hooks';
import { useSettingDistrictAction } from 'module/setting/district';
import { MTRUtil } from 'util/MTRUtil';

interface Props {
    title: string;
    list: District[];
}

export const DistrictSelector = React.memo(({ title, list }: Props) => {
    const enabledDistricts = useSettingDistrictState((state) => state.enabledDistrict);
    const { onSelectDistrict } = useSettingDistrictAction();

    return (
        <Box w="100%">
            <Text px={4} py={1}>
                {title}
            </Text>
            <MenuContainer>
                {list.map((location) => (
                    <MenuItem label={MTRUtil.translate(location)} key={location}>
                        <Switch
                            onChange={() => onSelectDistrict(location)}
                            size="lg"
                            value={enabledDistricts.includes(location)}
                        />
                    </MenuItem>
                ))}
            </MenuContainer>
        </Box>
    );
});
