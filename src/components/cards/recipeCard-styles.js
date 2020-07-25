import { StyleSheet } from 'react-native';
import { palette } from '../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 280,
        marginBottom: 16,
        borderRadius: 12,
        overflow: 'hidden'
    },
    tagline: {
        marginTop: 16,
        marginLeft: 16,
        fontSize: 15,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 14,
        letterSpacing: -0.24,
        color: palette.white70
    },
    title: {
        marginTop: 5,
        marginLeft: 16,
        fontSize: 28,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 34,
        letterSpacing: 0.36,
        color: palette.white
    }
});

export default styles;