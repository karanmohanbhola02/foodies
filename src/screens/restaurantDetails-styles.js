import { StyleSheet, Platform } from 'react-native';
import { palette } from '../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.gray2
    },
    details: {
        paddingTop: 0,
        paddingBottom: 16,
        paddingHorizontal: 16,
        flex: 1
    },
    header: {
        top: Platform.OS === 'ios' ? 30 : 0,
        zIndex: 1,
        position: 'absolute',
        width: '100%'
    },
    ratingContainer: {
        flexDirection: 'column',
        flex: 1
    },
    ratingStyle: {
        marginRight: 0,
        marginBottom: 5
    },
    reviewText: {
        color: palette.darkLimeGreen,
        fontSize: 11,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0.07,
        textAlign: "center",
        color: palette.darkLimeGreen
    }
});

export default styles;