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
import RestaurantReviewCard from '../components/cards/RestaurantReviewCard';

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
        const { restaurant } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header 
                        prevTitle={'Restaurants'} 
                        isBackgroundTransparent
                        rightIconPress={() => alert('bookmark')}
                        rightIconSource={require('../assets/icons/bookmark.png')}
                        navigation={this.props.navigation} />
                </View>
                <ImageGallery
                    title={restaurant.restaurantName}
                    thumbnails={restaurant.thumbnails} />
                <DetailsBar>
                    <DetailBarItem icon={require('../assets/icons/cash.png')} title={'€€'} />
                    <RatingAndReview 
                        style={styles.ratingContainer} 
                        ratingStyle={styles.ratingStyle}
                        rating={restaurant.rating}
                        reviewsCount={restaurant.reviewsCount}
                        reviewText={styles.reviewText} />
                    <DetailBarItem icon={require('../assets/icons/clock.png')} title={restaurant.timings} />
                </DetailsBar>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <FastImage source={require('../assets/images/map2.png')} style={{ height: 180 }} resizeMode="contain" />
                    <View style={styles.details}>
                        <Button title={'Make reservation'} onPress={this.handleModal} />
                        {restaurant.reviews.map((review, index) => <RestaurantReviewCard key={index} review={review} />)}
                    </View>
                </ScrollView>
                <ReservationModal 
                    isModalOpen={this.state.isModalOpen} 
                    onRequestClose={this.handleModal}
                    restaurant={restaurant} />
            </View>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    restaurant: state.restaurants.restaurants[ownProps.route.params.index]
});

const mapDispatchToProps = {
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RestaurantDetails);