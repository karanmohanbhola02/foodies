import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';

import styles from './counter-styles';

const Counter = ({ count, title, handleChange }) => {
    const [counter, setCount] = useState(count || 1);

    const handleIncrement = () => {
        setCount(counter + 1);
        handleChange(counter + 1);
    }

    const handleDecrement = () => {
        setCount(counter - 1);
        handleChange(counter - 1);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.icon} onPress={handleDecrement} disabled={counter === 0}>
                <FastImage source={require('../../assets/icons/minus.png')} style={styles.image} />
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{`${counter} ${title}`}</Text>
            </View>
            <TouchableOpacity style={styles.icon} onPress={handleIncrement} disabled={counter === 10}>
                <FastImage source={require('../../assets/icons/plus.png')} style={styles.image} />
            </TouchableOpacity>
        </View>
    );
};

export default Counter;