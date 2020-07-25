import React from 'react';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';

import styles from './ratingAndReview-styles';

const RatingAndReview = ({ style, ratingStyle, reviewText }) => {
    return (
        <View style={[styles.container, style]}>
            <View style={[styles.rating, ratingStyle]}>
                <FastImage source={require('../assets/icons/star-filled.png')} style={styles.star} />
                <FastImage source={require('../assets/icons/star-filled.png')} style={styles.star} />
                <FastImage source={require('../assets/icons/star-filled.png')} style={styles.star} />
                <FastImage source={require('../assets/icons/star.png')} style={styles.star} />
                <FastImage source={require('../assets/icons/star.png')} style={styles.star} />
            </View>
            <Text numberOfLines={1} ellipsizeMode="tail" style={[styles.review, reviewText]}>{'129 reviews'}</Text>
        </View>
    );
};

export default RatingAndReview;