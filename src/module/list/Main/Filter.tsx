import { Button, ButtonGroup, Flex, FormControl, FormLabel } from '@chakra-ui/react';
import React from 'react';
import { NullableInput } from 'component/core/NullableInput';
import { DistrictSelector } from 'component/DistrictSelector';
import { useListState } from '../hooks';
import { useListAction } from '../index';

export const Filter = React.memo(() => {
    const { name, district } = useListState((state) => state.filter);
    const restaurant = useListState((state) => state.restaurants);
    const enabledDistrict = [...new Set(restaurant.flatMap((_) => _.district))];
    const { updateFilter, resetFilter, pushFilterToHistory } = useListAction();
    return (
        <Flex mt={2} flexWrap="wrap">
            <Flex w="50%" pr={3}>
                <FormControl>
                    <FormLabel>餐廳名稱</FormLabel>
                    <NullableInput value={name} onChange={(name) => updateFilter({ name })} />
                </FormControl>
            </Flex>
            <Flex w="50%">
                <FormControl>
                    <FormLabel>出現地區</FormLabel>
                    <DistrictSelector
                        allowNull
                        list={enabledDistrict}
                        value={district}
                        onChange={(district) => updateFilter({ district })}
                    />
                </FormControl>
            </Flex>
            <Flex flex={1} justifyContent="flex-end" mt={2}>
                <ButtonGroup>
                    <Button bgColor="yellow.500" onClick={() => pushFilterToHistory()}>
                        搜尋
                    </Button>
                    <Button onClick={resetFilter}>重設</Button>
                </ButtonGroup>
            </Flex>
        </Flex>
    );
});
