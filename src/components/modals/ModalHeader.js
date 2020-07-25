import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import FastImage from 'react-native-fast-image';

import styles from './modalHeader-styles';

const ModalHeader = ({ title, onPress }) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={onPress} hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}>
                <FastImage source={require('../../assets/icons/dropdown.png')} style={styles.headerImage} />
            </TouchableOpacity>
            <Text style={styles.headerText}>{title}</Text>
            <View style={styles.emptyView} />
        </View>
    )
};

export default ModalHeader;