import { StyleSheet, Dimensions } from 'react-native';
import { palette } from '../theme';

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').width * 0.6
    },
    pagination: { 
        justifyContent: 'flex-end', 
        marginRight: 16 
    },
    text: {
        marginLeft: 16, 
        marginBottom: 16, 
        fontSize: 34,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 41,
        letterSpacing: 0.41,
        color: palette.white
    },
    imageBackground: { 
        width: '100%', 
        height: '100%', 
        justifyContent: 'flex-end' 
    }
});

export default styles;