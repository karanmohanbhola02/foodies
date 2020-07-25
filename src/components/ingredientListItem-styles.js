import { StyleSheet } from 'react-native';
import { palette } from '../theme';

const styles = StyleSheet.create({
    container: { 
        padding: 16, 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    item: { 
        marginLeft: 12 
    },
    image: { 
        width: 20, 
        height: 20 
    },
    title: {
        fontSize: 17,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 22,
        letterSpacing: -0.41,
        color: palette.black
    },
    subTitle: {
        fontSize: 15,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: -0.24,
        color: palette.gray
    }
});

export default styles;