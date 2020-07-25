import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Restaurants from '../screens/Restaurants';
import { screenNames } from '../constants';

const Stack = createStackNavigator();

const RestaurantsNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={screenNames.RESTAURANTS}>
            <Stack.Screen 
                name={screenNames.RESTAURANTS} 
                component={Restaurants}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default RestaurantsNavigator;