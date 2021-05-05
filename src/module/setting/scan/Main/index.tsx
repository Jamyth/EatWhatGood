import { Box, VStack } from '@chakra-ui/layout';
import { Button, Flex, StackDivider, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { useSettingScanState } from '../hooks';
import { Scanner } from './Scanner';
import { Item } from './Item';
import { StackHeader } from 'component/layout/StackHeader';
import { useSettingScanAction } from '../index';
import { Checkbox, CheckboxGroup } from '@chakra-ui/checkbox';
import { Restaurant } from 'type/restaurant';

export const Main = React.memo(() => {
    const showContent = useSettingScanState((state) => state.content !== null);
    const content = useSettingScanState((state) => state.content!);
    const selectedRestaurants = useSettingScanState((state) => state.selectedRestaurants);
    const useImage = useSettingScanState((state) => state.useImage);
    const backgroundColor = useColorModeValue('gray.100', 'gray.700');
    const { updateReadMode, resetContent, updateSelectedRestaurant, saveToLocalStorage } = useSettingScanAction();
    const isSelectedAll =
        content?.restaurants.length !== 0 && selectedRestaurants.length === content?.restaurants.length;

    const selectAll = () => {
        if (isSelectedAll) {
            updateSelectedRestaurant([]);
        } else {
            updateSelectedRestaurant(content.restaurants.map((_) => _.name));
        }
    };

    return (
        <Flex flex={1} flexDirection="column">
            <StackHeader
                backText="設定"
                title="讀取餐廳"
                rightNode={
                    <Button fontWeight="normal" onClick={showContent ? resetContent : updateReadMode} variant="ghost">
                        {showContent ? '重新讀取' : useImage ? '使用相機' : '使用圖片'}
                    </Button>
                }
            />
            {showContent ? (
                <Box mt={4}>
                    <Box py={2} px={4} mb={2} position="sticky" top={0} zIndex={2}>
                        <Button
                            backgroundColor="yellow.500"
                            fontWeight="normal"
                            onClick={saveToLocalStorage}
                            disabled={!selectedRestaurants.length}
                            isFullWidth
                        >
                            保存
                        </Button>
                    </Box>
                    <Checkbox w="100%" px={4} checked={isSelectedAll} onChange={selectAll}>
                        全選
                    </Checkbox>
                    <Box position="sticky" px={4} py={2} backgroundColor={backgroundColor} top={0} zIndex={1}>
                        包含餐廳
                    </Box>
                    <CheckboxGroup value={selectedRestaurants} onChange={updateSelectedRestaurant}>
                        <VStack spacing={0} divider={<StackDivider mx={4} />}>
                            {content.restaurants.length ? (
                                content.restaurants.map((_, i) => (
                                    <Item key={i} restaurant={_ as Omit<Restaurant, 'id'>} />
                                ))
                            ) : (
                                <Text w="100%" px={4}>
                                    沒有餐廳
                                </Text>
                            )}
                        </VStack>
                    </CheckboxGroup>
                </Box>
            ) : (
                <Scanner />
            )}
        </Flex>
    );
});
