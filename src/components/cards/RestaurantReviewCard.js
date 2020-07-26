import React from 'react';
import { View, Text } from 'react-native';

import styles from './restaurantReviewCard-styles';

const RestaurantReviewCard = ({ review }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{review}</Text>
        </View>
    );
};

export default RestaurantReviewCard;