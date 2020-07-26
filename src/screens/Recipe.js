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
        const { recipeCategory, route } = this.props;
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.header}>
                    <Header 
                        prevTitle={route.params.prevHeaderTitle} 
                        isBackgroundTransparent
                        rightIconPress={() => alert('bookmark')}
                        rightIconSource={require('../assets/icons/bookmark.png')}
                        navigation={this.props.navigation} />
                </SafeAreaView>
                <ImageGallery
                    title={recipeCategory.name}
                    thumbnails={recipeCategory.thumbnails} />
                <DetailsBar>
                    <DetailBarItem icon={require('../assets/icons/restaurantsSelected.png')} title={`${recipeCategory.people} people`} />
                    <DetailBarItem icon={require('../assets/icons/clock.png')} title={recipeCategory.time} />
                </DetailsBar>
                <View style={styles.details}>
                    <Button title={'See ingredients'} onPress={this.handleModal} />
                    <InfoList details={recipeCategory.recipeSteps} />
                </View>
                <IngredientModal 
                    data={recipeCategory.ingredients}
                    isModalOpen={this.state.isModalOpen} 
                    onRequestClose={this.handleModal} />
            </View>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    recipeCategory: state.recipes.recipes[ownProps.route.params.prevIndex].subCategories[ownProps.route.params.index]
});

const mapDispatchToProps = {
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Recipes);