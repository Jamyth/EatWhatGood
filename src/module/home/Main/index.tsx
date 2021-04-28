import { Box, Button, Heading, Flex, Link, useToast } from '@chakra-ui/react';
import React from 'react';
import { useHomeState } from '../hooks';
import { useHomeAction } from 'module/home';
import { NavLink } from 'react-router-dom';
import { DistrictSelector } from 'component/DistrictSelector';
import { LocalStorageKey, LocalStorageUtil } from 'util/LocalStorageUtil';
import type { State as SettingDistrictState } from 'module/setting/district/type';

export const Main = React.memo(() => {
    const district = useHomeState((state) => state.selectedDistrict);
    const restaurants = useHomeState((state) =>
        state.restaurant.filter((_) => (district ? _.district.includes(district) : false)),
    );
    const enabledDistricts =
        LocalStorageUtil.getItem<SettingDistrictState>(LocalStorageKey.SETTING_DISTRICT)?.enabledDistrict ?? [];
    const [name, setName] = React.useState('');
    const [drawn, setDrawn] = React.useState(false);
    const { updateState } = useHomeAction();

    const getRestaurant = () => {
        const rand = Math.floor(Math.random() * restaurants.length);
        const name = restaurants[rand].name;
        setName(name);
    };
    function setDeceleratingTimeout(callback: () => void, factor: number, times: number) {
        const internalCallback = (function (t, counter) {
            return function () {
                if (--t > 0) {
                    window.setTimeout(internalCallback, ++counter * factor);
                    callback();
                }
            };
        })(times, 0);

        window.setTimeout(internalCallback, factor);
    }

    const draw = () => {
        if (!restaurants.length) {
            return;
        }
        setDrawn(false);
        setDeceleratingTimeout(getRestaurant, 10, 30);
        setTimeout(() => {
            setDrawn(true);
        }, 4000);
    };

    return (
        <Flex flexDirection="column" flex={1} overflow="hidden">
            <Box mt={24} px={6}>
                <Heading fontSize="xl">歡迎回來，</Heading>
                <Heading>今日食咩好？</Heading>
                <Box mt={4}>
                    <DistrictSelector
                        allowNull
                        nullText="請選擇"
                        value={district}
                        onChange={(selectedDistrict) => updateState({ selectedDistrict })}
                    />
                </Box>
                <Box mt={4}>
                    <Button
                        disabled={!restaurants.length}
                        onClick={draw}
                        fontWeight="medium"
                        backgroundColor="yellow.500"
                        isFullWidth
                        h="60px"
                    >
                        幫我揀食咩
                    </Button>
                </Box>
                <Heading textAlign="center" mt={4} color={drawn ? 'yellow.500' : undefined}>
                    {name}
                </Heading>
                {!enabledDistricts.length && (
                    <Box
                        borderRadius="10px"
                        backgroundColor="green.700"
                        mt={12}
                        p={4}
                        borderWidth="1px"
                        borderColor={'green.500'}
                        color="white"
                    >
                        冇地區揀？
                        <br />
                        {'前往 '}
                        <Link textDecoration="underline" to="/setting/district" as={NavLink}>
                            地區列表
                        </Link>
                        {' 啟用想要既地區啦！'}
                    </Box>
                )}
            </Box>
        </Flex>
    );
});
