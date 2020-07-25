import { StyleSheet } from 'react-native';
import { palette } from '../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 160,
        marginBottom: 16,
        borderRadius: 12,
        overflow: 'hidden'
    },
    tagline: {
        fontSize: 15,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 14,
        letterSpacing: -0.24,
        color: palette.white70
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 34,
        letterSpacing: 0.36,
        color: palette.white
    }
});

export default styles;