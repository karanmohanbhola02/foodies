import React from 'react';
import { View, Text } from 'react-native';
import ImageTile from './shared/ImageTile';

import styles from './restaurantInfo-styles';

const RestaurantInfo = ({ restaurantName, restaurantAddress, restaurantCountry }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.restaurantName}>Gusteau’s</Text>
                <Text style={styles.restaurantAddress}>5 Avenue Anatole</Text>
                <Text style={styles.restaurantAddress}>Paris, France</Text>
            </View>
            <ImageTile style={styles.image} />
        </View>
    );
};

export default RestaurantInfo;
