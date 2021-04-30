import { Box, Heading, VStack, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { MenuItem } from 'component/MenuItem';
import { MenuContainer } from 'component/MenuContainer';
import { Switch } from 'component/core/Switch';
import { BsMoon } from 'react-icons/bs';
import { BiScan } from 'react-icons/bi';
import { FaMapSigns, FaQrcode } from 'react-icons/fa';
import { IoIosInformationCircle } from 'react-icons/io';

export const Main = React.memo(() => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box>
            <Heading pt={12} px={4} pb={2}>
                設定
            </Heading>
            <VStack spacing={8}>
                <MenuContainer>
                    <MenuItem label="地區列表" icon={FaMapSigns} linkOrAction="/setting/district" />
                    <MenuItem label="分享餐廳" icon={FaQrcode} linkOrAction="/setting/share" />
                    <MenuItem label="讀取餐廳" icon={BiScan} linkOrAction="/setting/scan" />
                </MenuContainer>
                <MenuContainer>
                    <MenuItem icon={BsMoon} label="黑暗模式">
                        <Switch value={colorMode === 'dark'} onChange={toggleColorMode} />
                    </MenuItem>
                    <MenuItem label="關於" icon={IoIosInformationCircle} linkOrAction="/setting/about" />
                </MenuContainer>
            </VStack>
        </Box>
    );
});
