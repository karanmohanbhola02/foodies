import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import DetailsBar from '../components/shared/DetailsBar';
import DetailBarItem from '../components/shared/DetailBarItem';
import Button from '../components/buttons/Button';
import Header from '../components/shared/Header';
import InfoList from '../components/InfoList';
import IngredientModal from '../components/modals/IngredientModal';
import ImageGallery from '../components/ImageGallery';

import styles from './recipe-styles';

class Recipes extends React.PureComponent {

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
                <SafeAreaView style={styles.header}>
                    <Header 
                        prevTitle={'Recipes'} 
                        isBackgroundTransparent
                        rightIconSource={require('../assets/icons/bookmark.png')}
                        navigation={this.props.navigation} />
                </SafeAreaView>
                <ImageGallery navigation={this.props.navigation} />
                <DetailsBar>
                    <DetailBarItem icon={require('../assets/icons/restaurantsSelected.png')} title={'6 people'} />
                    <DetailBarItem icon={require('../assets/icons/clock.png')} title={'45 minutes'} />
                </DetailsBar>
                <View style={styles.details}>
                    <Button title={'See ingredients'} onPress={this.handleModal} />
                    <InfoList details={[1, 2, 3, 4]} />
                </View>
                <IngredientModal isModalOpen={this.state.isModalOpen} onRequestClose={this.handleModal} />
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
)(Recipes);