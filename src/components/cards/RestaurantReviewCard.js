import React from 'react';
import { View, Text } from 'react-native';

import styles from './restaurantReviewCard-styles';

const RestaurantReviewCard = ({}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{'The restaurant was degraded to a 4-star rating after feared food critic Anton Ego (possibly deliberately) wrote a scathing review regarding Gusteau’s cooking.'}</Text>
        </View>
    );
};

export default RestaurantReviewCard;