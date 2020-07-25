import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';
import { palette } from '../theme';

import styles from './imageGallery-styles';

const ImageGallery = () => {
    return (
        <View style={styles.container}>
            <Swiper
                showsButtons={false}
                paginationStyle={styles.pagination}
                activeDotColor={palette.white}
                dotColor={palette.offWhite}>
                <ImageBackground source={require('../assets/images/sample.jpg')} style={{ width: '100%', height: '100%' }}>
                    <Text>Beautiful</Text>
                </ImageBackground>
                <ImageBackground source={require('../assets/images/sample.jpg')} style={{ width: '100%', height: '100%' }}>
                    <Text>Beautiful</Text>
                </ImageBackground>
                <ImageBackground source={require('../assets/images/sample.jpg')} style={{ width: '100%', height: '100%' }}>
                    <Text>Beautiful</Text>
                </ImageBackground>
                <ImageBackground source={require('../assets/images/sample.jpg')} style={{ width: '100%', height: '100%' }}>
                    <Text>Beautiful</Text>
                </ImageBackground>
            </Swiper>
        </View>
    );
}

export default ImageGallery;