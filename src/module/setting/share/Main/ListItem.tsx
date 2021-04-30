import React from 'react';
import { Box } from '@chakra-ui/layout';
import { StackDivider, useColorModeValue, VStack, Text, Checkbox, Flex } from '@chakra-ui/react';
import { Restaurant } from 'type/restaurant';
import { District } from 'type/district';
import { LocalStorageKey, LocalStorageUtil } from 'util/LocalStorageUtil';
import { MTRUtil } from 'util/MTRUtil';
import { BsChevronRight } from 'react-icons/bs';

interface Props {
    district: District;
    defaultOpen?: boolean;
}

export const ListItem = React.memo(({ district, defaultOpen }: Props) => {
    const backgroundColor = useColorModeValue('gray.100', 'gray.700');
    const restaurants = (LocalStorageUtil.getItem<Restaurant[]>(LocalStorageKey.RESTAURANT) ?? []).filter((_) =>
        _.district.includes(district),
    );
    const [isCollapsed, setIsCollapsed] = React.useState(!defaultOpen);
    const containerRef = React.useRef<HTMLDivElement>(null);

    const containerStyle: React.CSSProperties = {
        height: isCollapsed ? 0 : containerRef.current?.scrollHeight,
        transition: 'height 0.3s ease-in-out',
        overflow: 'hidden',
    };

    return (
        <Box position="relative" className="dropdown-container">
            <Flex
                className="dropdown"
                position="sticky"
                onClick={() => setIsCollapsed(!isCollapsed)}
                justifyContent="space-between"
                alignItems="center"
                zIndex={1}
                px={4}
                py={2}
                top={0}
                backgroundColor={backgroundColor}
                borderBottomWidth="1px"
            >
                {MTRUtil.translate(district)}
                <BsChevronRight
                    style={{
                        transform: isCollapsed ? undefined : 'rotate(90deg)',
                        transition: 'transform 0.15s ease-in-out',
                    }}
                />
            </Flex>
            <Box ref={containerRef} style={containerStyle}>
                <VStack spacing={0} divider={<StackDivider mx={4} />}>
                    {restaurants.length ? (
                        restaurants.map((_) => (
                            <Checkbox key={_.id} w="100%" px={4} h={8} value={_.name}>
                                {_.name}
                            </Checkbox>
                        ))
                    ) : (
                        <Text w="100%" px={4}>
                            沒有餐廳
                        </Text>
                    )}
                </VStack>
            </Box>
        </Box>
    );
});
