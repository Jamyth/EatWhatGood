import { Box, Button, VStack } from '@chakra-ui/react';
import React from 'react';
import { StackHeader } from 'component/layout/StackHeader';
import { DistrictSelector } from './DistrictSelector';
import { MTRUtil } from 'util/MTRUtil';
import { useSettingDistrictState } from '../hooks';
import { VscCompareChanges } from 'react-icons/vsc';
import { useSettingDistrictAction } from 'module/setting/district';

export const Main = React.memo(() => {
    const mode = useSettingDistrictState((state) => state.displayMode);
    const { changeDisplayMode } = useSettingDistrictAction();

    const onClick = () => {
        if (mode === 'area') {
            changeDisplayMode('line');
        } else {
            changeDisplayMode('area');
        }
    };

    return (
        <Box>
            <StackHeader
                title="地區列表"
                backText="設定"
                rightNode={
                    <Button onClick={onClick} variant="link" p={0} colorScheme="blue">
                        <VscCompareChanges fontSize="24px" />
                    </Button>
                }
            />
            {mode === 'area' ? (
                <VStack spacing={6} mt={6}>
                    <DistrictSelector defaultOpen list={MTRUtil.getIslandLocation()} title="港島" />
                    <DistrictSelector list={MTRUtil.getKowloonLocation()} title="九龍" />
                    <DistrictSelector list={MTRUtil.getNewTerritoriesLocation()} title="新界" />
                </VStack>
            ) : (
                <VStack spacing={6} mt={6}>
                    <DistrictSelector defaultOpen list={MTRUtil.getTsuenWanLine()} title="荃灣綫" />
                    <DistrictSelector list={MTRUtil.getIslandLine()} title="港島綫" />
                    <DistrictSelector list={MTRUtil.getKwunTongLine()} title="觀塘綫" />
                    <DistrictSelector list={MTRUtil.getEastRailLine()} title="東鐵綫" />
                    <DistrictSelector list={MTRUtil.getTungChungLine()} title="東涌綫" />
                    <DistrictSelector list={MTRUtil.getWestRailLine()} title="西鐵綫" />
                    <DistrictSelector list={MTRUtil.getTseungKwanOLine()} title="將軍澳綫" />
                    <DistrictSelector list={MTRUtil.getTuenMaLinePhaseOne()} title="屯馬綫一期" />
                    <DistrictSelector list={MTRUtil.getSouthIslandLine()} title="南港島綫" />
                    <DistrictSelector list={MTRUtil.getDisneylandResortLine()} title="迪士尼綫" />
                    <DistrictSelector list={MTRUtil.getAirportExpressLine()} title="機場快綫" />
                </VStack>
            )}
        </Box>
    );
});
