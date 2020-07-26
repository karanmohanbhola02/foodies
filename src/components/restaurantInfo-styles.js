import { StyleSheet } from 'react-native';
import { palette } from '../theme';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16
    },
    restaurantName: {
        fontSize: 22,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0.32,
        color: palette.black,
        marginBottom: 5,
    },
    restaurantAddress: {
        fontSize: 17,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 22,
        letterSpacing: -0.41,
        color: palette.gray
    },
    image: {
        width: 120,
        height: 88
    }
});

export default styles;