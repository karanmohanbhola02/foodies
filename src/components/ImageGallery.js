import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';
import { palette } from '../theme';

import styles from './imageGallery-styles';

const ImageGallery = ({ title, thumbnails }) => {
    return (
        <View style={styles.container}>
            <Swiper
                showsButtons={false}
                paginationStyle={styles.pagination}
                activeDotColor={palette.white}
                dotColor={palette.offWhite}>
                {thumbnails.map((thumbnail, index) => {
                    return (
                        <ImageBackground key={index} source={{ uri: thumbnail }} style={styles.imageBackground}>
                            <Text style={styles.text}>{title}</Text>
                        </ImageBackground>
                    );
                })}
            </Swiper>
        </View>
    );
}

export default ImageGallery;