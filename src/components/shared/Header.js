import React from 'react';
import { View, Text } from 'react-native';

import styles from './header-styles';

const Header = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
        </View>
    );
};

export default Header;