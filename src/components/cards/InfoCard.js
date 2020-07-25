import React from 'react';
import { View, Text } from 'react-native';

import styles from '../infoList-styles';

const InfoCard = ({ index }) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemBullet}>{index}</Text>
            <Text numberOfLines={2} ellipsizeMode="tail" style={styles.itemText}>{'In separate bowl, separate egg whites and beat until stiff peaks form.'}</Text>
        </View>
    )
}

export default InfoCard;
