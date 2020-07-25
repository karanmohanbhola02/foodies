import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';

import styles from './ingredientListItem-styles';

const IngredientListItem = ({ title, subTitle, onPress, isSelected }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <FastImage source={isSelected ? require('../assets/icons/roundSelected.png') : require('../assets/icons/round.png')} style={styles.image} />
            <View style={styles.item}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default IngredientListItem;