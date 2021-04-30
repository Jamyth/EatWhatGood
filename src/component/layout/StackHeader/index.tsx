import { Flex, Text, Button, useColorModeValue, Box, Center } from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { SafeReactChild } from 'type';

interface Props {
    title: string;
    backText?: string;
    rightNode?: SafeReactChild;
}

export const StackHeader = React.memo(({ backText = '', title, rightNode }: Props) => {
    const backgroundColor = useColorModeValue('gray.100', 'gray.700');
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    };

    return (
        <Flex
            position="sticky"
            shadow="md"
            top={0}
            alignItems="center"
            justifyContent="center"
            backgroundColor={backgroundColor}
            zIndex={100}
        >
            <Button
                p={0}
                onClick={goBack}
                fontWeight="normal"
                variant="link"
                colorScheme="blue"
                position="absolute"
                left={4}
                fontSize="md"
                top="50%"
                transform="translateY(-50%)"
            >
                <IoIosArrowBack fontSize="20px" /> {backText}
            </Button>
            <Text fontSize="md" fontWeight="medium" py={3}>
                {title}
            </Text>
            {rightNode && (
                <Center position="absolute" right={4} top="50%" transform="translateY(-50%)">
                    {rightNode}
                </Center>
            )}
        </Flex>
    );
});
