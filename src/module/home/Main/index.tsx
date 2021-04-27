import { Box, Button, Heading, Flex, Link } from '@chakra-ui/react';
import React from 'react';
import { useHomeState } from '../hooks';
import { useHomeAction } from 'module/home';
import { NavLink } from 'react-router-dom';
import { DistrictSelector } from 'component/DistrictSelector';

export const Main = React.memo(() => {
    const district = useHomeState((state) => state.selectedDistrict);
    const { updateState } = useHomeAction();

    return (
        <Flex flexDirection="column" flex={1} overflow="hidden" maxH="100vh">
            <Heading mt={28} fontSize="xl" px={6}>
                歡迎回來，
            </Heading>
            <Heading px={6}>今日食咩好？</Heading>
            <Box px={6} mt={4}>
                <DistrictSelector value={district} onChange={(selectedDistrict) => updateState({ selectedDistrict })} />
            </Box>
            <Box px={6} mt={4}>
                <Button fontWeight="medium" backgroundColor="yellow.500" isFullWidth h="60px">
                    幫我揀食咩
                </Button>
            </Box>
            <Box
                borderRadius="10px"
                backgroundColor="green.700"
                mx={6}
                mt={12}
                p={4}
                borderWidth="1px"
                borderColor={'green.500'}
                color="white"
            >
                冇地區揀？
                <br />
                前往{' '}
                <Link textDecoration="underline" to="/setting/district" as={NavLink}>
                    地區列表
                </Link>{' '}
                啟用想要既地區啦！
            </Box>
            <Flex flex={1} overflowY="scroll" px={6} py={12}>
                {/** TODO: Feature List */}
            </Flex>
        </Flex>
    );
});
