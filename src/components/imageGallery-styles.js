import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').width * 0.6
    },
    pagination: { 
        justifyContent: 'flex-end', 
        marginRight: 16 
    }
});

export default styles;