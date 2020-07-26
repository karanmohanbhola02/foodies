import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Header from '../components/shared/Header';
import RecipeCategoryCard from '../components/cards/RecipeCategoryCard';
import SafeAreaView from '../components/shared/SafeAreaView';
import { screenNames } from '../constants';

import styles from './recipes-styles';

class RecipeCategory extends React.PureComponent {

    renderItem = ({ item, index }) => {
        return (
            <RecipeCategoryCard
                tagline={`${item.people} people . ${item.time}`}
                title={item.name}
                onPress={() => this.props.navigation.navigate(screenNames.RECIPE, { prevHeaderTitle: this.props.route.params.headerTitle, index, prevIndex: this.props.route.params.index })}
                imageSource={{ uri: item.thumbnails[0] }} />
        );
    }

    render() {
        const { recipeCategories, navigation, route } = this.props;
        
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Header prevTitle={'Recipes'} currentTitle={route.params.headerTitle} navigation={navigation} />
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        style={styles.listContainer}
                        data={recipeCategories}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => `${index}`}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    recipeCategories: state.recipes.recipes[ownProps.route.params.index].subCategories
});

const mapDispatchToProps = {
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeCategory);