import React from 'react'
import { Modal } from 'react-native'
interface ModalProps {
    children: React.ReactNode;
    transparent: boolean;
    isModalVisible: boolean;
}
export const CustomModal =({children, transparent, isModalVisible}:ModalProps)=>{
    return (
        <Modal
            animationType='slide'
            transparent={transparent}
            visible={isModalVisible}
         >
            {children}
        </Modal>
    )
}