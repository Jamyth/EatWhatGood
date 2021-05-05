import React from 'react';
import { Box, Link, VStack } from '@chakra-ui/layout';
import { StackHeader } from 'component/layout/StackHeader';
import { MenuContainer } from 'component/MenuContainer';
import { MenuItem } from 'component/MenuItem';
import { MTRUtil } from 'util/MTRUtil';
import { LocalStorageKey, LocalStorageUtil } from 'util/LocalStorageUtil';
import type { State as SettingDistrictState } from 'module/setting/district/type';
import { Restaurant } from 'type/restaurant';
import { Flex, useColorModeValue, Image, Text } from '@chakra-ui/react';

const VERSION = 'Version 1.1.0';

export const Main = React.memo(() => {
    const allLocations = MTRUtil.getAllLocation();
    const enabledDistricts =
        LocalStorageUtil.getItem<SettingDistrictState>(LocalStorageKey.SETTING_DISTRICT)?.enabledDistrict ?? [];
    const restaurant = LocalStorageUtil.getItem<Restaurant[]>(LocalStorageKey.RESTAURANT) ?? ([] as Restaurant[]);
    const backgroundColor = useColorModeValue('gray.100', 'gray.700');
    return (
        <Box>
            <StackHeader title="關於" backText="設定" />
            <VStack spacing={8} mt={8}>
                <Box
                    backgroundColor={backgroundColor}
                    borderTopWidth="1px"
                    borderBottomWidth="1px"
                    px={4}
                    py={3}
                    w="100%"
                >
                    <Flex>
                        <Image w="80px" h="80px" src={require('./asset/app-icon.png')} />
                        <Flex flexDirection="column" justifyContent="space-around">
                            <Text fontSize="lg" fontWeight="medium">
                                食咩好
                            </Text>
                            <Text fontSize="sm">Eat What Good</Text>
                            <Text fontSize="sm">{VERSION}</Text>
                        </Flex>
                    </Flex>
                    <Text mt={2}>
                        <Text fontWeight="medium" d="inline">
                            食咩好
                        </Text>{' '}
                        是為解決日常飲食抉擇的人而設的，用戶可自行輸入、設定、管理不同地區及不同餐廳，以『 一鍵
                        』的方式為用戶選出合適餐廳。
                    </Text>
                    <Text mt={2}>
                        如需開放來源碼的資料，請到訪此網站：
                        <Link target="__blank" color="yellow.500" href="https://github.com/Jamyth/EatWhatGood">
                            https://github.com/Jamyth/EatWhatGood
                        </Link>
                    </Text>
                </Box>
                <MenuContainer>
                    <MenuItem label="名稱">食咩好</MenuItem>
                    <MenuItem label="名稱 (英文)">Eat What Good</MenuItem>
                    <MenuItem label="版本">{VERSION}</MenuItem>
                    <MenuItem label="開發員">Jamyth Luk</MenuItem>
                </MenuContainer>
                <MenuContainer>
                    <MenuItem label="餐廳數目">{restaurant.length + ' 間'}</MenuItem>
                    <MenuItem label="已啓用地區數目">{enabledDistricts.length + ' 個'}</MenuItem>
                    <MenuItem label="總地區數目">{allLocations.length + ' 個'}</MenuItem>
                </MenuContainer>
            </VStack>
        </Box>
    );
});
