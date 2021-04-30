import React from 'react';
import { Box, Button, Center, Flex } from '@chakra-ui/react';
import { useSettingScanAction } from 'module/setting/scan';
import { useSettingScanState } from '../hooks';
import QRReader from 'react-qr-reader';

export const Scanner = React.memo(() => {
    const useImage = useSettingScanState((state) => state.useImage);
    const qrReaderRef = React.useRef<QRReader>(null);
    const { updateContent } = useSettingScanAction();

    const onScan = (content: string | null) => {
        if (!content) {
            return;
        }
        updateContent(content);
    };

    const uploadImage = () => {
        qrReaderRef.current?.openImageDialog();
    };

    return (
        <Flex flex={1} flexDirection="column" mt={6} justifyContent="center" px={6}>
            <Center>
                <QRReader
                    delay={300}
                    onError={(e) => {
                        throw e;
                    }}
                    onScan={onScan}
                    showViewFinder={false}
                    style={{ width: '250px', height: '250px' }}
                    ref={qrReaderRef}
                    legacyMode={useImage}
                />
            </Center>
            <Center mt={4}>
                {useImage && (
                    <Button fontWeight="normal" onClick={uploadImage}>
                        上載圖片
                    </Button>
                )}
            </Center>
        </Flex>
    );
});
