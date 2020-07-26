import React from 'react';
import { View, Text } from 'react-native';
import ImageTile from './shared/ImageTile';

import styles from './restaurantInfo-styles';

const RestaurantInfo = ({ restaurantName, restaurantAddress, imageSource }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.restaurantName}>{restaurantName}</Text>
                <Text style={styles.restaurantAddress}>{restaurantAddress.street}</Text>
                <Text style={styles.restaurantAddress}>{`${restaurantAddress.city}, ${restaurantAddress.country}`}</Text>
            </View>
            <ImageTile style={styles.image} imageSource={imageSource} />
        </View>
    );
};

export default RestaurantInfo;
