import { Button, Modal, ModalContent, ModalOverlay, useColorMode, ButtonGroup } from '@chakra-ui/react';
import React from 'react';
import { useSettingShareAction } from '../index';
import { useSettingShareState } from '../hooks';
import { Box, Flex } from '@chakra-ui/layout';
import { QRCode } from 'react-qr-svg';
// import { saveAs } from 'file-saver';
// import { toPng as png } from 'html-to-image';

export const QRCodeModal = React.memo(() => {
    const qrContent = useSettingShareState((state) => state.qrContent!);
    const { clearQRContent } = useSettingShareAction();

    // const toPng = () => {
    //     png(document.body).then((url) => saveAs(url, 'eat-what-good.png'));
    // };

    const qrCodeStyle: React.CSSProperties = {
        margin: '0 auto',
    };

    return (
        <Modal isCentered isOpen onClose={clearQRContent}>
            <ModalOverlay />
            <ModalContent w="70%">
                <Box p={4}>
                    <Box textAlign="center" mb={2} fontWeight="bold" fontSize="xl" letterSpacing={1.5}>
                        食咩好
                    </Box>
                    <Box p={4}>
                        <QRCode id="qr-code" style={qrCodeStyle} level="H" value={qrContent.url} />
                    </Box>
                    <Flex flexDirection="row-reverse">
                        <ButtonGroup mt={6}>
                            {/* <Button fontWeight="normal" bgColor="yellow.500" onClick={toPng}>
                                下載圖片
                            </Button> */}
                            <Button fontWeight="normal" onClick={clearQRContent}>
                                關閉
                            </Button>
                        </ButtonGroup>
                    </Flex>
                </Box>
            </ModalContent>
        </Modal>
    );
});
