import React from 'react';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';

import styles from './detailBarItem-styles';

const DetailBarItem = ({ icon, title }) => {
    return (
        <View style={styles.container}>
            <FastImage resizeMode="contain" source={icon} style={styles.image} />
            <Text style={styles.text}>{title}</Text>
        </View>
    )
};

export default DetailBarItem;
