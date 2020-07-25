import React from 'react';
import { TouchableOpacity, View, ImageBackground, Text } from 'react-native';

import styles from './recipeCategoryCard-styles';

const RecipeCategoryCard = ({ tagline, title, imageSource, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <ImageBackground source={imageSource} style={{ width: '100%', height: '100%' }}>
                    <View style={{ justifyContent: 'space-between', padding: 16, flex: 1 }}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.tagline}>{tagline.toUpperCase()}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
};

export default RecipeCategoryCard;