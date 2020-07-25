import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './button-styles';

const Button = ({ onPress, title }) => {
    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Button;