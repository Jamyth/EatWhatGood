import { Modal, ModalOverlay } from '@chakra-ui/modal';
import { Button, ModalContent, VStack, Text, StackDivider } from '@chakra-ui/react';
import { useListAction } from 'module/list';
import React from 'react';

export const ActionModal = React.memo(() => {
    const { closeModal, navigateToUpdate, deleteRestaurant } = useListAction();
    return (
        <Modal isOpen onClose={closeModal} size="xs" isCentered>
            <ModalOverlay />
            <ModalContent textAlign="center" py={2} w="50%">
                <VStack spacing={0} divider={<StackDivider mx={4} />}>
                    <Text py={2}>動作</Text>
                    <Button
                        variant="ghost"
                        isFullWidth
                        borderRadius="0"
                        _focus={{
                            boxShadow: 'none',
                        }}
                        fontWeight="normal"
                        onClick={navigateToUpdate}
                    >
                        編輯
                    </Button>
                    <Button
                        variant="ghost"
                        isFullWidth
                        borderRadius="0"
                        _focus={{
                            boxShadow: 'none',
                        }}
                        fontWeight="normal"
                        colorScheme="red"
                        onClick={deleteRestaurant}
                    >
                        刪除
                    </Button>
                    <Button
                        variant="ghost"
                        isFullWidth
                        borderRadius="0"
                        _focus={{
                            boxShadow: 'none',
                        }}
                        fontWeight="normal"
                        onClick={closeModal}
                    >
                        取消
                    </Button>
                </VStack>
            </ModalContent>
        </Modal>
    );
});
