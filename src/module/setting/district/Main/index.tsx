import { Box, VStack } from '@chakra-ui/react';
import React from 'react';
import { StackHeader } from 'component/layout/StackHeader';
import { DistrictSelector } from './DistrictSelector';
import { MTRUtil } from 'util/MTRUtil';

export const Main = React.memo(() => {
    return (
        <Box>
            <StackHeader title="地區列表" backText="設定" />
            <VStack spacing={6} mt={6}>
                <DistrictSelector list={MTRUtil.getIslandLocation()} title="港島" />
                <DistrictSelector list={MTRUtil.getKowloonLocation()} title="九龍" />
                <DistrictSelector list={MTRUtil.getNewTerritoriesLocation()} title="新界" />
            </VStack>
        </Box>
    );
});
