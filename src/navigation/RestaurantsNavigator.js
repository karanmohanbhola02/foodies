import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Restaurants from '../screens/Restaurants';
import RestaurantDetails from '../screens/RestaurantDetails';
import { screenNames } from '../constants';

const Stack = createStackNavigator();

const RestaurantsNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName={screenNames.RESTAURANTS}
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name={screenNames.RESTAURANTS} component={Restaurants} />
            <Stack.Screen name={screenNames.RESTAURANT_DETAILS} component={RestaurantDetails} />
        </Stack.Navigator>
    );
}

export default RestaurantsNavigator;