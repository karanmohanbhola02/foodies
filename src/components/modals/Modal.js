import React from 'react';
import { View, Modal as NativeModal } from 'react-native';

import styles from './modal-styles';

const Modal = ({ isModalOpen, onRequestClose, children, style }) => {
    return (
        <NativeModal
            visible={isModalOpen}
            onRequestClose={onRequestClose}
            hardwareAccelerated
            animationType="slide"
            statusBarTranslucent={false}
            transparent={true}>
            <View  style={styles.overlay}>
                <View style={[styles.container, style]}>
                    {children}
                </View>
            </View>
        </NativeModal>
    )
};

export default Modal;