import React from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import FastImage from 'react-native-fast-image';
import DetailsBar from '../components/shared/DetailsBar';
import DetailBarItem from '../components/shared/DetailBarItem';
import Button from '../components/buttons/Button';
import Header from '../components/shared/Header';
import RatingAndReview from '../components/RatingAndReview';
import ReservationModal from '../components/modals/ReservationModal';
import ImageGallery from '../components/ImageGallery';

import styles from './restaurantDetails-styles';

class RestaurantDetails extends React.PureComponent {

    state = {
        isModalOpen: false
    };

    handleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header 
                        prevTitle={'Recipes'} 
                        isBackgroundTransparent
                        rightIconSource={require('../assets/icons/bookmark.png')}
                        navigation={this.props.navigation} />
                </View>
                <ImageGallery navigation={this.props.navigation} />
                <DetailsBar>
                    <DetailBarItem icon={require('../assets/icons/cash.png')} title={'€€'} />
                    <RatingAndReview 
                        style={styles.ratingContainer} 
                        ratingStyle={styles.ratingStyle}
                        reviewText={styles.reviewText} />
                    <DetailBarItem icon={require('../assets/icons/clock.png')} title={'18:00 · 22:00'} />
                </DetailsBar>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <FastImage source={require('../assets/images/map2.png')} style={{ height: 180 }} resizeMode="contain" />
                    <View style={styles.details}>
                        <Button title={'Make reservation'} onPress={this.handleModal} />
                        
                    </View>
                </ScrollView>
                <ReservationModal isModalOpen={this.state.isModalOpen} onRequestClose={this.handleModal} />
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    recipes: state.recipes.recipes
});

const mapDispatchToProps = {
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RestaurantDetails);