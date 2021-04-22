import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Box, Button, Flex, useColorModeValue } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface Props {
    children: string;
    icon: IconType;
    link: string;
}

export const Link = React.memo(({ children, icon: Icon, link }: Props) => {
    const history = useHistory();
    const location = useLocation();
    const isActive = location.pathname === link || (link !== '/' && location.pathname.includes(link));

    const color = useColorModeValue('yellow.500', 'yellow.500');

    const navigate = () => {
        history.push(link);
    };

    return (
        <Button
            _hover={{ background: 'transparent' }}
            _focus={{ boxShadow: 'none', background: 'transparent' }}
            onClick={navigate}
            variant="ghost"
            color={isActive ? color : undefined}
        >
            <Flex flexDirection="column" alignItems="center">
                <Icon fontSize="22px" />
                <Box mt={1} fontWeight="normal">
                    {children}
                </Box>
            </Flex>
        </Button>
    );
});
