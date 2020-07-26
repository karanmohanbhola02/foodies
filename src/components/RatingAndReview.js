import React from 'react';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';

import styles from './ratingAndReview-styles';

const RatingAndReview = ({ style, ratingStyle, reviewText, reviewsCount, rating }) => {
    return (
        <View style={[styles.container, style]}>
            <View style={[styles.rating, ratingStyle]}>
                {[1,2,3,4,5].map((_, index) => {
                    return (
                        <FastImage key={index} source={index < rating ? require('../assets/icons/star-filled.png') : require('../assets/icons/star.png')} style={styles.star} />
                    );
                })}
            </View>
            <Text numberOfLines={1} ellipsizeMode="tail" style={[styles.review, reviewText]}>{`${reviewsCount} reviews`}</Text>
        </View>
    );
};

export default RatingAndReview;