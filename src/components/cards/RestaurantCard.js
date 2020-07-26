import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import ImageTile from '../shared/ImageTile';
import RatingAndReview from '../RatingAndReview';

import styles from './restaurantCard-styles';

const RestaurantCard = ({ subTitle, title, imageSource, onPress, rating, reviewsCount }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <View>
                    <View style={styles.desc}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.subTitle}>{subTitle}</Text>
                    </View>
                    <RatingAndReview
                        rating={rating}
                        reviewsCount={reviewsCount} />
                </View>
                <ImageTile imageSource={imageSource} />
            </View>
        </TouchableOpacity>
    )
};

export default RestaurantCard;