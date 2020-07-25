import React from 'react';
import { View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Modal from './Modal';
import ModalHeader from './ModalHeader';
import Button from '../buttons/Button';
import IngredientListItem from '../IngredientListItem';

import styles from './reservationModal-styles';

const ReservationModal = ({ isModalOpen, onRequestClose }) => {
    return (
        <Modal
            isModalOpen={isModalOpen}
            style={styles.modalStyle}
            onRequestClose={onRequestClose}>
            <View style={{ flex: 1 }}>
                <ModalHeader title={'Reservation'} onPress={onRequestClose} />
                <FlatList
                    style={styles.listContainer}
                    showsVerticalScrollIndicator={false}
                    data={[1,2,3,4,5,6, 7, 8, 9, 10]}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    renderItem={({ item, index }) => <IngredientListItem title={'Salt'} subTitle={'½ teaspoon'} onPress={() => {}} isSelected={false} />}
                    keyExtractor={(item, index) => `${index}`}
                />
                <SafeAreaView style={styles.buttonContainer}>
                    <Button title={'Pay'} />
                </SafeAreaView>
            </View>
        </Modal>
    )
};

export default ReservationModal;