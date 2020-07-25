import { StyleSheet } from 'react-native';
import { palette } from '../theme';

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        backgroundColor: palette.white,
        shadowColor: "rgba(0, 0, 0, 0.04)",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 1,
        marginTop: 16
    },
    separator: {
        height: 1,
        backgroundColor: palette.gray2
    },
    itemContainer: {
        padding: 15,
        flexDirection: 'row'
    },
    itemBullet: {
        width: '10%',
        maxWidth: '10%',
        fontSize: 17,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 22,
        letterSpacing: -0.41,
        textAlign: "center",
        color: palette.gray
    },
    itemText: {
        width: '90%',
        maxWidth: '90%',
        fontSize: 17,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 22,
        letterSpacing: -0.41,
        color: palette.black
    }
});

export default styles;