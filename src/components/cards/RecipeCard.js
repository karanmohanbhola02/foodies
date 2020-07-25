import React from 'react';
import { TouchableOpacity, View, ImageBackground, Text } from 'react-native';

import styles from './recipeCard-styles';

const RecipeCard = ({ tagline, title, imageSource, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <ImageBackground source={imageSource} style={{ width: '100%', height: '100%'}}>
                    <Text style={styles.tagline}>{tagline.toUpperCase()}</Text>
                    <Text style={styles.title}>{title}</Text>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
};

export default RecipeCard;