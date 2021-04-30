import React from 'react';
import { Box } from '@chakra-ui/layout';
import { StackHeader } from 'component/layout/StackHeader';
import { useSettingShareState } from '../hooks';
import { LocalStorageKey, LocalStorageUtil } from 'util/LocalStorageUtil';
import { Restaurant } from 'type/restaurant';
import { useSettingShareAction } from '../index';
import { Checkbox, CheckboxGroup } from '@chakra-ui/checkbox';
import { District } from 'type/district';
import { ListItem } from './ListItem';
import { HiShare } from 'react-icons/hi';
import { QRCodeModal } from './QRCodeModal';

export const Main = React.memo(() => {
    const { updateSelectedRestaurant, generateQRCode } = useSettingShareAction();
    const selectedRestaurant = useSettingShareState((state) => state.selectedRestaurant);
    const showModal = useSettingShareState((state) => state.qrContent !== null);
    const list = LocalStorageUtil.getItem<Restaurant[]>(LocalStorageKey.RESTAURANT) ?? [];

    const districts: District[] = [...new Set(list.flatMap((_) => _.district))];

    const isSelectedAll = list.length !== 0 && selectedRestaurant.length === list.length;

    const onSelectAll = () => {
        if (isSelectedAll) {
            updateSelectedRestaurant([]);
        } else {
            updateSelectedRestaurant(list.map((_) => _.name));
        }
    };

    return (
        <Box>
            <StackHeader
                title="分享餐廳"
                backText="設定"
                rightNode={<HiShare onClick={generateQRCode} fontSize="24px" />}
            />
            <Box
                mt={4}
                __css={{
                    '.dropdown-container:first-child': {
                        '.dropdown': {
                            borderTopWidth: '1px',
                        },
                    },
                }}
            >
                <Checkbox w="100%" px={4} h={8} checked={isSelectedAll} onChange={onSelectAll}>
                    {isSelectedAll ? '取消全選' : '全選'}
                </Checkbox>
                <CheckboxGroup value={selectedRestaurant} onChange={updateSelectedRestaurant}>
                    {districts.map((_, i) => (
                        <ListItem district={_} key={_} defaultOpen={i === 0} />
                    ))}
                </CheckboxGroup>
            </Box>
            {showModal && <QRCodeModal />}
        </Box>
    );
});
