import React from 'react';
import { View, Text } from 'react-native';

import styles from '../infoList-styles';

const InfoCard = ({ index, title }) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemBullet}>{index}</Text>
            <Text numberOfLines={2} ellipsizeMode="tail" style={styles.itemText}>{title}</Text>
        </View>
    )
}

export default InfoCard;
