import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';

import styles from './header-styles';

const HeaderLeft = ({ navigation, prevTitle }) => {
    return (
        <TouchableOpacity style={styles.headerLeftContainer} onPress={() => navigation.goBack()} hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}>
            <FastImage
                style={{ width: 12, height: 21, marginRight: 5 }}
                source={require('../../assets/icons/back.png')}
                resizeMode={FastImage.resizeMode.contain}
            />
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.prevTitle}>{prevTitle}</Text>
        </TouchableOpacity>
    );
}

const HeaderCenter = ({ currentTitle }) => {
    return (
        <View style={styles.headerCenterContainer}>
            <Text style={styles.currentTitle} numberOfLines={1} ellipsizeMode="tail">{currentTitle}</Text>
        </View>
    );
}

const HeaderRight = ({ iconSource }) => {
    return (
        <View style={styles.headerRightContainer}>
            <TouchableOpacity onPress={() => alert('Search!')} hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}>
                <FastImage
                    style={{ width: 20, height: 20 }}
                    source={iconSource || require('../../assets/icons/search.png')}
                    resizeMode={FastImage.resizeMode.contain}
                />
            </TouchableOpacity>
        </View>
    );
}

const Header = ({ rootScreenTitle, isRootScreen, prevTitle, currentTitle, navigation, isBackgroundTransparent, rightIconSource }) => {
    return (
        <View style={[styles.container, isBackgroundTransparent && { backgroundColor: 'transparent' }]}>
            <View style={styles.headerContainer}>
                {!isRootScreen ? <HeaderLeft prevTitle={prevTitle} navigation={navigation} /> : <View />}
                {!isRootScreen ? <HeaderCenter currentTitle={currentTitle} /> : <View />}
                <HeaderRight iconSource={rightIconSource} />
            </View>
            {isRootScreen ? <View style={styles.rootScreenTitle}>
                <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">{rootScreenTitle}</Text>
            </View> : null}
        </View>
    );
};

export default Header;