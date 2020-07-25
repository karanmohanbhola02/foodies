import React from 'react';
import { TouchableOpacity, View, ImageBackground, Text } from 'react-native';

import styles from './restaurantCard-styles';
import FastImage from 'react-native-fast-image';

const RestaurantCard = ({ subTitle, title, imageSource, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <View>
                    <View style={{ marginBottom: 15 }}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.subTitle}>{title}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
                            <FastImage source={require('../../assets/icons/star-filled.png')} style={{ width: 20, height: 20 }} />
                            <FastImage source={require('../../assets/icons/star-filled.png')} style={{ width: 20, height: 20 }} />
                            <FastImage source={require('../../assets/icons/star-filled.png')} style={{ width: 20, height: 20 }} />
                            <FastImage source={require('../../assets/icons/star.png')} style={{ width: 20, height: 20 }} />
                            <FastImage source={require('../../assets/icons/star.png')} style={{ width: 20, height: 20 }} />
                        </View>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.review}>{'129 reviews'}</Text>
                    </View>
                </View>
                <View style={{ width: 110, height: '100%' ,backgroundColor: 'red', borderRadius: 8, overflow: 'hidden'}}>
                    <FastImage source={require('../../assets/images/sample.jpg')} style={{ width: '100%', height: '100%' }} />
                </View>
            </View>
        </TouchableOpacity>
    )
};

export default RestaurantCard;