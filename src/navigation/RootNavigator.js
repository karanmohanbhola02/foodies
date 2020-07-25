import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecipesNavigator from './RecipesNavigator';
import RestaurantsNavigator from './RestaurantsNavigator';
import { screenNames } from '../constants';
import { palette } from '../theme'

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                lazy={true}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        let iconName;
                        if (route.name === screenNames.RECIPES) {
                            iconName = focused ? require('../assets/icons/recipesSelected.png') : require('../assets/icons/recipes.png')
                        } else if (route.name === screenNames.RESTAURANTS) {
                            iconName = focused ? require('../assets/icons/restaurantsSelected.png') : require('../assets/icons/restaurants.png')
                        }

                        return <Image source={iconName} style={{width: 18, height: 18 }} resizeMode="contain"  />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: palette.darkLimeGreen,
                    inactiveTintColor: palette.gray,
                    showLabel: false
                }}>
                <Tab.Screen name={screenNames.RECIPES} component={RecipesNavigator} />
                <Tab.Screen name={screenNames.RESTAURANTS} component={RestaurantsNavigator} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;