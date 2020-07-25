import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import FastImage from 'react-native-fast-image';
import Header from '../components/shared/Header';
import RestaurantCard from '../components/cards/RestaurantCard';
import SafeAreaView from '../components/shared/SafeAreaView';
import { screenNames } from '../constants';

import styles from './restaurants-styles';

class Restaurants extends React.PureComponent {

    renderItem = ({ item }) => {
        return (
            <RestaurantCard
                tagline="Start your day right"
                onPress={() => this.props.navigation.navigate(screenNames.RESTAURANT_DETAILS, { headerTitle: 'Breakfast' })}
                title="Breakfast"
                imageSource={require('../assets/images/sample.jpg')} />
        );
    }

    render() {
        const { restaurants } = this.props;

        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Header rootScreenTitle={'Restaurants'} isRootScreen />
                    <FastImage source={require('../assets/images/map.png')} style={{ height: 180 }} resizeMode="contain" />
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        style={styles.listContainer}
                        data={restaurants}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => `${index}`}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => ({
    restaurants: state.restaurants.restaurants
});

const mapDispatchToProps = {
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Restaurants);