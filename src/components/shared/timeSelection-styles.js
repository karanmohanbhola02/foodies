import { StyleSheet } from 'react-native';
import { palette } from '../../theme';

const styles = StyleSheet.create({
    container: {
        marginTop: 16
    },
    timeSelectionItem: {
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 8,
        backgroundColor: palette.lightLimeGreen,
        marginRight: 16
    },
    text: {
        fontSize: 17,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 22,
        letterSpacing: -0.41,
        textAlign: "center",
        color: palette.darkLimeGreen
    },
    selectedTimeSelectionItem: {
        backgroundColor: palette.darkLimeGreen
    },
    selectedText: {
        color: palette.white
    }
});

export default styles;