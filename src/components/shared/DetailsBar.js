import React from 'react';
import { View } from 'react-native';

import styles from './detailsBar-styles';

const InfoPanel = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};

export default InfoPanel;