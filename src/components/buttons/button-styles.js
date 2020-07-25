import { StyleSheet } from 'react-native';
import { palette } from '../../theme';

const styles = StyleSheet.create({
    container: {
        padding: 15,
        borderRadius: 8,
        backgroundColor: palette.darkLimeGreen,
        shadowColor: "rgba(0, 0, 0, 0.04)",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {        
        fontSize: 17,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 22,
        letterSpacing: -0.41,
        textAlign: "center",
        color: palette.white
    }
});

export default styles;