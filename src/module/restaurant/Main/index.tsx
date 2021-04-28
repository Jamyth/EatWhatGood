import { Flex, Button, Box, Heading, FormControl, FormLabel, VStack } from '@chakra-ui/react';
import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useRestaurantState } from '../hooks';
import { useHistory } from 'react-router-dom';
import { NullableInput } from 'component/core/NullableInput';
import { useRestaurantAction } from '../index';
import { DistrictCheckbox } from 'component/DistrictCheckbox';
import { LocalStorageUtil, LocalStorageKey } from 'util/LocalStorageUtil';
import type { State as SettingDistrictState } from 'module/setting/district/type';
import { HStack } from '@chakra-ui/layout';

export const Main = React.memo(() => {
    const history = useHistory();
    const tab = useRestaurantState((state) => state.tab);
    const { name, district } = useRestaurantState((state) => state.editingData);
    const { updateEditingData, createOrUpdateRestaurant, resetForm } = useRestaurantAction();
    const list =
        LocalStorageUtil.getItem<SettingDistrictState>(LocalStorageKey.SETTING_DISTRICT)?.enabledDistrict ?? null;

    const title = tab === 'create' ? '新增餐廳' : '修改餐廳';

    const onFinish = () => {
        createOrUpdateRestaurant();
    };

    return (
        <Flex flexDirection="column" flex={1} overflow="hidden" maxH="100vh">
            <Box mt={14} px={6}>
                <Button borderRadius="100%" h="52px" onClick={history.goBack}>
                    <IoIosArrowBack fontSize="20px" />
                </Button>
                <Heading mt={4}>{title}</Heading>
                <VStack spacing={6} mt={6}>
                    <FormControl w="100%">
                        <FormLabel>餐廳名稱</FormLabel>
                        <NullableInput value={name} onChange={(name) => updateEditingData({ name })} />
                    </FormControl>
                    <FormControl w="100%">
                        <FormLabel>出現地區</FormLabel>
                        <DistrictCheckbox value={district} onChange={(district) => updateEditingData({ district })} />
                    </FormControl>
                    <HStack w="100%">
                        <Button
                            fontWeight="normal"
                            bgColor="yellow.500"
                            disabled={list === null || list.length === 0}
                            onClick={onFinish}
                        >
                            {tab === 'create' ? '新增' : '修改'}
                        </Button>
                        <Button fontWeight="normal" onClick={resetForm}>
                            重設
                        </Button>
                    </HStack>
                </VStack>
            </Box>
        </Flex>
    );
});
