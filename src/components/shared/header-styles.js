import { StyleSheet } from 'react-native';
import { palette } from '../../theme';

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: palette.darkLimeGreen
    },
    text: {
        fontSize: 34,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 41,
        letterSpacing: 0.41,
        color: palette.white
    }
});

export default styles;