import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';
import { useHistory } from 'coil-react';
import { AiOutlineRight } from 'react-icons/ai';
import { SafeReactChild } from 'type';

interface Props {
    label: string;
    children?: SafeReactChild;
    linkOrAction?: string | (() => void);
    icon?: IconType;
}

export const MenuItem = React.memo(({ linkOrAction, children, icon: Icon, label }: Props) => {
    const history = useHistory();

    const navigate = (e: React.MouseEvent) => {
        if (typeof linkOrAction === 'string') {
            history.push(linkOrAction);
        } else if (linkOrAction) {
            linkOrAction();
        }
    };

    return (
        <Flex alignItems="center" className="menu-item-container">
            {Icon && (
                <Box pl={4} pr={3} color="yellow.500">
                    <Icon fontSize="24px" />
                </Box>
            )}
            <Flex
                onClick={navigate}
                pl={Icon ? 0 : 4}
                pr={4}
                alignItems="center"
                flex={1}
                py={3}
                justifyContent="space-between"
                borderBottomWidth="1px"
                className="menu-item"
            >
                <Flex flex={1} fontSize="lg">
                    {label}
                </Flex>
                <Box className="menu-item-children">{children ? children : <AiOutlineRight />}</Box>
            </Flex>
        </Flex>
    );
});
