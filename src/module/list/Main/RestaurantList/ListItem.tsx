import { Box, Text, StackDivider, Button } from '@chakra-ui/react';
import { useListState } from 'module/list/hooks';
import React from 'react';
import { District } from 'type/district';
import { useColorModeValue, VStack } from '@chakra-ui/react';
import { MTRUtil } from 'util/MTRUtil';
import { ActionModal } from './ActionModal';
import { useListAction } from '../../index';

interface Props {
    district: District;
}

export const ListItem = React.memo(({ district }: Props) => {
    const backgroundColor = useColorModeValue('gray.100', 'gray.700');
    const restaurants = useListState((state) => state.restaurants.filter((_) => _.district.includes(district)));
    const showActionModal = useListState((state) => state.openedItem !== null);
    const { openModal } = useListAction();

    return (
        <Box position="relative">
            <Box position="sticky" zIndex={1} px={4} py={1} top={0} backgroundColor={backgroundColor}>
                <Text fontWeight="medium">{MTRUtil.translate(district)}</Text>
            </Box>
            <VStack spacing={0} divider={<StackDivider mx={4} />}>
                {restaurants.length ? (
                    restaurants.map((_) => (
                        <Button
                            key={_.id}
                            isFullWidth
                            variant="ghost"
                            justifyContent="flex-start"
                            fontWeight="normal"
                            px={4}
                            h={8}
                            borderRadius="0"
                            _focus={{
                                boxShadow: 'none',
                            }}
                            onClick={() => openModal(_)}
                        >
                            {_.name}
                        </Button>
                    ))
                ) : (
                    <Text w="100%" px={4}>
                        沒有餐廳
                    </Text>
                )}
            </VStack>
            {showActionModal && <ActionModal />}
        </Box>
    );
});
