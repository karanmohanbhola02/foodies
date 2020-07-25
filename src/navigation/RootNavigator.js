import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecipesNavigator from './RecipesNavigator';
import RestaurantsNavigator from './RestaurantsNavigator';
import { screenNames } from '../constants';

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name={screenNames.RECIPES} component={RecipesNavigator} />
                <Tab.Screen name={screenNames.RESTAURANTS} component={RestaurantsNavigator} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;