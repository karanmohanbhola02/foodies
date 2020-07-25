import React from 'react';
import { TouchableOpacity, View, ImageBackground, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import RatingAndReview from '../RatingAndReview';

import styles from './restaurantCard-styles';

const RestaurantCard = ({ subTitle, title, imageSource, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <View>
                    <View style={styles.desc}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.subTitle}>{title}</Text>
                    </View>
                    <RatingAndReview />
                </View>
                <View style={styles.imageContainer}>
                    <FastImage source={require('../../assets/images/sample.jpg')} style={styles.image} />
                </View>
            </View>
        </TouchableOpacity>
    )
};

export default RestaurantCard;