import { Checkbox, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { Restaurant } from 'type/restaurant';
import { Box, VStack } from '@chakra-ui/layout';
import { BsChevronRight } from 'react-icons/bs';
import { MTRUtil } from 'util/MTRUtil';

interface Props {
    restaurant: Omit<Restaurant, 'id'>;
}

export const Item = React.memo(({ restaurant }: Props) => {
    const [isCollapsed, setIsCollapsed] = React.useState(true);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const backgroundColor = useColorModeValue('gray.300', 'gray.700');

    const containerStyle: React.CSSProperties = {
        height: isCollapsed ? 0 : containerRef.current?.scrollHeight,
        transition: 'height 0.3s ease-in-out',
        overflow: 'hidden',
    };

    return (
        <Box w="100%">
            <Flex justifyContent="space-between" px={4} alignItems="center" py={2}>
                <Flex flex={1}>
                    <Checkbox w="100%" value={restaurant.name}>
                        {restaurant.name}
                    </Checkbox>
                </Flex>
                <Flex alignItems="center" onClick={() => setIsCollapsed(!isCollapsed)}>
                    <Text mr={2}>地區</Text>
                    <BsChevronRight
                        style={{
                            transform: isCollapsed ? undefined : 'rotate(90deg)',
                            transition: 'transform 0.15s ease-in-out',
                        }}
                    />
                </Flex>
            </Flex>
            <Box ref={containerRef} style={containerStyle} backgroundColor={backgroundColor}>
                <VStack space={2} pl={8}>
                    {restaurant.district.map((_) => (
                        <Text w="100%" py={1}>
                            {MTRUtil.translate(_)}
                        </Text>
                    ))}
                </VStack>
            </Box>
        </Box>
    );
});
