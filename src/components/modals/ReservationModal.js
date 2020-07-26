import React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Modal from './Modal';
import ModalHeader from './ModalHeader';
import Button from '../buttons/Button';
import RestaurantInfo from '../RestaurantInfo';
import Counter from '../shared/Counter';
import TimeSelection from '../shared/TimeSelection';
import DaySelection from '../shared/DaySelection';

import styles from './reservationModal-styles';

const ReservationModal = ({ isModalOpen, onRequestClose }) => {
    return (
        <Modal
            isModalOpen={isModalOpen}
            style={styles.modalStyle}
            onRequestClose={onRequestClose}>
            <View style={{ flex: 1 }}>
                <ModalHeader title={'Reservation'} onPress={onRequestClose} />
                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                    <RestaurantInfo />
                    <View style={styles.separator} />
                    <View style={{ paddingHorizontal: 16, marginTop: 16  }}>
                        <DaySelection />
                        <Counter title="People" handleChange={() => {}} />
                        <TimeSelection />
                    </View>
                </ScrollView>
            </View>
            <SafeAreaView style={styles.buttonContainer}>
                <Button title={'Pay'} onPress={() => alert('coming soon.')} />
            </SafeAreaView>
        </Modal>
    )
};

export default ReservationModal;