import { Box, Button, Heading, Flex } from '@chakra-ui/react';
import { EnumSelect } from 'component/core/EnumSelect';
import React from 'react';
import { useHomeState } from '../hooks';
import { LocalStorageKey, LocalStorageUtil } from 'util/LocalStorageUtil';
import type { State as SettingDistrictState } from 'module/setting/district/type';
import { useHomeAction } from 'module/home';
import { MTRUtil } from 'util/MTRUtil';

export const Main = React.memo(() => {
    const list =
        LocalStorageUtil.getItem<SettingDistrictState>(LocalStorageKey.SETTING_DISTRICT)?.enabledDistrict ?? [];
    const district = useHomeState((state) => state.selectedDistrict);
    const { updateState } = useHomeAction();

    return (
        <Flex flexDirection="column" flex={1} overflow="hidden" maxH="100vh">
            <Heading mt={12} fontSize="xl" px={6}>
                歡迎回來，
            </Heading>
            <Heading px={6}>今日食咩好？</Heading>
            <Box px={6} mt={4}>
                <EnumSelect.InitialNullable
                    value={district}
                    list={list}
                    onChange={(selectedDistrict) => updateState({ selectedDistrict })}
                    translator={MTRUtil.translate}
                />
            </Box>
            <Box px={6} mt={4}>
                <Button fontWeight="medium" backgroundColor="yellow.500" isFullWidth h="60px">
                    幫我揀食咩
                </Button>
            </Box>
            <Flex flex={1} overflowY="scroll">
                {/** TODO: Feature List */}
            </Flex>
        </Flex>
    );
});
