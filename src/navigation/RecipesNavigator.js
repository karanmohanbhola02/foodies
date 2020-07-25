import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Recipes from '../screens/Recipes';
import RecipeCategory from '../screens/RecipeCategory';
import Recipe from '../screens/Recipe';
import { screenNames } from '../constants';

const Stack = createStackNavigator();

const RecipesNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={screenNames.RECIPES}
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name={screenNames.RECIPES} component={Recipes} />
            <Stack.Screen name={screenNames.RECIPE_CATEGORY} component={RecipeCategory} />
            <Stack.Screen name={screenNames.RECIPE} component={Recipe} />
        </Stack.Navigator>
    );
}

export default RecipesNavigator;