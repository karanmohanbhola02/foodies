import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { screenNames } from '../constants';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={screenNames.APP}>
            <Stack.Screen 
                name={screenNames.APP} 
                component={TabNavigator}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default AppNavigator;