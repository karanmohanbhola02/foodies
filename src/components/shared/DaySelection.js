import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';

import styles from './daySelection-styles';

const DaySelection = ({ count, title, handleChange }) => {
    const [counter, setCount] = useState(count || 1);

    return (
        <View style={styles.container}>
            <View style={styles.emptyView} />
            <View style={styles.textContainer}>
                <Text style={styles.text}>{'Today'}</Text>
            </View>
            <TouchableOpacity style={styles.icon}>
                <FastImage source={require('../../assets/icons/dropdown.png')} style={{ width: 25, height: 25 }} />
            </TouchableOpacity>
        </View>
    );
};

export default DaySelection;