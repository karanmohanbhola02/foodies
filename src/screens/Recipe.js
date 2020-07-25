import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Header from '../components/shared/Header';
import RecipeCard from '../components/cards/RecipeCard';
import { screenNames } from '../constants';

import styles from './recipes-styles';
class Recipes extends React.PureComponent {

    renderItem = ({ item }) => {
        return (
            <RecipeCard 
                tagline="Start your day right" 
                onPress={() => this.props.navigation.navigate(screenNames.RECIPE_CATEGORY, { headerTitle: 'Breakfast' })}
                title="Breakfast" 
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
)(Recipes);