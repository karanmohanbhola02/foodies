import { StyleSheet } from 'react-native';
import { palette } from '../../theme';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        backgroundColor: palette.lightLimeGreen,
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 16
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
    textContainer: {
        paddingVertical: 16
    },
    icon: {
        padding: 16
    },
    emptyView: {
        width: 57
    }
});

export default styles;