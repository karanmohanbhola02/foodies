import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Recipes from '../screens/Recipes';
import { screenNames } from '../constants';

const Stack = createStackNavigator();

const RecipesNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={screenNames.RECIPES}>
            <Stack.Screen 
                name={screenNames.RECIPES} 
                component={Recipes}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default RecipesNavigator;