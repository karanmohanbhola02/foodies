import React from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';

import styles from './imageTile-styles';

const ImageTile = ({ style }) => {
    return (
        <View style={[styles.imageContainer, style]}>
            <FastImage source={require('../../assets/images/sample.jpg')} style={styles.image} />
        </View>
    );
}

export default ImageTile;