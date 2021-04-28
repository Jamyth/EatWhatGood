import React from 'react';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import { Link } from './Link';
import { IoIosHome, IoIosSettings } from 'react-icons/io';
import { BiPlusMedical } from 'react-icons/bi';
import { FaMap } from 'react-icons/fa';

export const BottomNavigation = React.memo(() => {
    const backgroundColor = useColorModeValue('gray.100', 'gray.700');

    return (
        <React.Fragment>
            <Flex
                shadow="lg"
                position="fixed"
                w="100%"
                bottom={0}
                left={0}
                zIndex={10}
                justifyContent="space-between"
                alignItems="center"
                px={8}
                py={3}
                backgroundColor={backgroundColor}
            >
                <Link link="/" icon={IoIosHome}>
                    主頁
                </Link>
                <Link link="/list" icon={FaMap}>
                    地區
                </Link>
                <Link link="/restaurant/create" icon={BiPlusMedical}>
                    新增
                </Link>
                <Link link="/setting" icon={IoIosSettings}>
                    設定
                </Link>
            </Flex>
        </React.Fragment>
    );
});
