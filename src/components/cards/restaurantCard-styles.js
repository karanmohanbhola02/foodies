import { StyleSheet } from 'react-native';
import { palette } from '../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 16,
        borderRadius: 12,
        backgroundColor: palette.white,
        shadowColor: 'rgba(0, 0, 0, 0.04)',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 1,
        padding: 16,
        justifyContent: 'space-between'
    },
    subTitle: {
        fontSize: 13,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: -0.21,
        color: palette.gray3,
        marginTop: 5,
    },
    review: {
        fontSize: 13,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 18,
        letterSpacing: -0.08,
        color: palette.gray
    },
    title: {
        fontSize: 17,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 22,
        letterSpacing: -0.41,
        color: palette.black
    },
    imageContainer: { 
        width: 110, 
        height: '100%', 
        borderRadius: 8, 
        overflow: 'hidden'
    },
    image: { 
        width: '100%', 
        height: '100%'
    },
    desc: { 
        marginBottom: 15 
    }
});

export default styles;