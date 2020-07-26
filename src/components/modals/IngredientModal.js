import React from 'react';
import { View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Modal from './Modal';
import ModalHeader from './ModalHeader';
import Button from '../buttons/Button';
import IngredientListItem from '../IngredientListItem';

import styles from './ingredientModal-styles';

const IngredientModal = ({ isModalOpen, onRequestClose, data }) => {
    return (
        <Modal
            isModalOpen={isModalOpen}
            onRequestClose={onRequestClose}>
            <View style={{ flex: 1 }}>
                <ModalHeader title={'Ingredients'} onPress={onRequestClose} />
                <FlatList
                    style={styles.listContainer}
                    showsVerticalScrollIndicator={false}
                    data={data}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    renderItem={({ item, index }) => <IngredientListItem title={item.name} subTitle={item.quantity} onPress={() => {}} isSelected={false} />}
                    keyExtractor={(item, index) => `${index}`}
                />
                <SafeAreaView style={styles.buttonContainer}>
                    <Button title={'Add to Reminders'} onPress={() => alert('coming soon.')} />
                </SafeAreaView>
            </View>
        </Modal>
    )
};

export default IngredientModal;