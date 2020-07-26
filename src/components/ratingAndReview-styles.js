import { StyleSheet } from 'react-native';
import { palette } from '../theme';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    rating: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginRight: 10
    },
    star: {
        width: 20, 
        height: 20
    },
    imageBackground: { 
        width: '100%', 
        height: '100%', 
        justifyContent: 'flex-end' 
    },
    review: {
        fontSize: 13,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 18,
        letterSpacing: -0.08,
        color: palette.gray
    }
});

export default styles;