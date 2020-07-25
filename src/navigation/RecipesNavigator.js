import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FastImage from 'react-native-fast-image';
import Recipes from '../screens/Recipes';
import RecipeCategory from '../screens/RecipeCategory';
import Recipe from '../screens/Recipe';
import { screenNames } from '../constants';
import { palette } from '../theme';

const Stack = createStackNavigator();

const RecipesNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={screenNames.RECIPES}>
            <Stack.Screen
                name={screenNames.RECIPES}
                component={Recipes}
                options={{
                    headerTitle: null,
                    headerRight: () => (
                        <TouchableOpacity style={{ paddingHorizontal: 15 }} onPress={() => alert('Search!')} hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}>
                            <FastImage
                                style={{ width: 20, height: 20 }}
                                source={require('../assets/icons/search.png')}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </TouchableOpacity>
                    ),
                    headerStyle: {
                        backgroundColor: palette.darkLimeGreen,
                        borderBottomWidth: 0,
                        shadowOpacity: 0
                    }
                }} />
            <Stack.Screen 
                name={screenNames.RECIPE_CATEGORY} 
                component={RecipeCategory}
                options={({ route }) => ({ 
                    title: route.params.headerTitle,
                    headerRight: () => (
                        <TouchableOpacity style={{ paddingHorizontal: 15 }} onPress={() => alert('Search!')} hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}>
                            <FastImage
                                style={{ width: 20, height: 20 }}
                                source={require('../assets/icons/search.png')}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </TouchableOpacity>
                    ),
                    headerStyle: {
                        backgroundColor: palette.darkLimeGreen,
                        borderBottomWidth: 0,
                        shadowOpacity: 0
                    } 
                })}
            />
            <Stack.Screen 
                name={screenNames.RECIPE} 
                component={Recipe}
                options={({ route }) => ({ 
                    headerTitle: null,
                    headerRight: () => (
                        <TouchableOpacity style={{ paddingHorizontal: 15 }} onPress={() => alert('Search!')} hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}>
                            <FastImage
                                style={{ width: 20, height: 20 }}
                                source={require('../assets/icons/search.png')}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </TouchableOpacity>
                    ),
                    headerStyle: {
                        backgroundColor: palette.darkLimeGreen,
                        borderBottomWidth: 0,
                        shadowOpacity: 0
                    } 
                })}
            />
        </Stack.Navigator>
    );
}

export default RecipesNavigator;