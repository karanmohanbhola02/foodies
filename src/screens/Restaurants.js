import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

class Restaurants extends React.PureComponent {
    render() {
        return (
            <SafeAreaView style={{ backgroundColor: '#73c700', flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: '#FFFFFF'}}>
                    <Text>Restaurants</Text>
                </View>
            </SafeAreaView>
        );
    }
}

export default Restaurants;