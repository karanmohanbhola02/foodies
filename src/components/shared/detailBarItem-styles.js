import { StyleSheet } from 'react-native';
import { palette } from '../../theme';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    text: {
        fontSize: 11,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0.07,
        textAlign: "center",
        color: palette.darkLimeGreen
    },
    image: {
        width: 20,
        height: 20,
        marginBottom: 5
    }
});

export default styles;