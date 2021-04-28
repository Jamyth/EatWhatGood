import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { District } from 'type/district';
import { MenuContainer } from 'component/MenuContainer';
import { MenuItem } from 'component/MenuItem';
import { Switch } from 'component/core/Switch';
import { useSettingDistrictState } from '../hooks';
import { useSettingDistrictAction } from 'module/setting/district';
import { MTRUtil } from 'util/MTRUtil';
import { BsChevronRight } from 'react-icons/bs';

interface Props {
    title: string;
    list: District[];
    defaultOpen?: boolean;
}

export const DistrictSelector = React.memo(({ title, list, defaultOpen = false }: Props) => {
    const enabledDistricts = useSettingDistrictState((state) => state.enabledDistrict);
    const { onSelectDistrict } = useSettingDistrictAction();

    const [isCollapsed, setIsCollapsed] = React.useState(!defaultOpen);

    const containerRef = React.useRef<HTMLDivElement>(null);

    const containerStyle: React.CSSProperties = {
        height: isCollapsed ? 0 : containerRef.current?.scrollHeight,
        transition: 'height 0.3s ease-in-out',
        overflow: 'hidden',
    };

    return (
        <Box w="100%">
            <Flex justifyContent="space-between" px={4} py={1} onClick={() => setIsCollapsed(!isCollapsed)}>
                <Text>{title}</Text>
                <BsChevronRight
                    style={{
                        transform: isCollapsed ? undefined : 'rotate(90deg)',
                        transition: 'transform 0.15s ease-in-out',
                    }}
                />
            </Flex>
            <Box ref={containerRef} style={containerStyle}>
                <MenuContainer>
                    {list.map((location) => (
                        <MenuItem label={MTRUtil.translate(location)} key={location}>
                            <Switch
                                onChange={() => onSelectDistrict(location)}
                                value={enabledDistricts.includes(location)}
                            />
                        </MenuItem>
                    ))}
                </MenuContainer>
            </Box>
        </Box>
    );
});
