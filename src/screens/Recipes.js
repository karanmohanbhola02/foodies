import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

class Recipes extends React.PureComponent {
    render() {
        return (
            <SafeAreaView style={{ backgroundColor: '#73c700', flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: '#FFFFFF'}}>
                    <Text>Recipes</Text>
                </View>
            </SafeAreaView>
        );
    }
}

export default Recipes;