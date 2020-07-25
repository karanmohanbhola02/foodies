import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Header from '../components/shared/Header';
import RecipeCategoryCard from '../components/cards/RecipeCategoryCard';
import { screenNames } from '../constants';

import styles from './recipes-styles';

class RecipeCategory extends React.PureComponent {

    renderItem = ({ item }) => {
        return (
            <RecipeCategoryCard 
                tagline="Start your day right" 
                title="Breakfast" 
                onPress={() => this.props.navigation.navigate(screenNames.RECIPE)}
                imageSource={require('../assets/images/sample.jpg')} />
        );
    }
    
    render() {
        const { recipes } = this.props;
        console.log(recipes)
        return (
            <View style={styles.container}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={styles.listContainer}
                    data={recipes}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => `${index}`}
                />
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
)(RecipeCategory);