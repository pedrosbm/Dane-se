import React, { useState } from "react"

import { Button, Dialog, Portal, Text } from "react-native-paper"

type DialogModalProps = {
    title: string,
    description: string,
    visible: boolean,
    setVisible: (b: boolean) => void,
    confirmAction: () => void
}

const DialogModal = ({ title, description, confirmAction, visible, setVisible }: DialogModalProps) => {

    const handleConfirm = () => {
        confirmAction()
        setVisible(false)
    }

    return (
        <>
            <Portal>
                <Dialog visible={visible} onDismiss={() => setVisible(false)}>
                    <Dialog.Title>{title}</Dialog.Title>
                    <Dialog.Content>
                        <Text variant="bodyMedium">{description}</Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={() => setVisible(false)}>Cancelar</Button>
                        <Button onPress={handleConfirm}>Próximo</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </>
    )
}

export default DialogModal