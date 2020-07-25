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
    },
    headerContainer: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    headerLeftContainer: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        flex: 1 
    },
    headerRightContainer: { 
        flex: 1, 
        alignItems: 'flex-end'
    },
    headerCenterContainer: { 
        flex: 1, 
        alignItems: 'center'
    },
    rootScreenTitle: { 
        marginTop: 15 
    },
    prevTitle: {
        fontSize: 17,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: -0.41,
        color: palette.white
    },
    currentTitle: {
        fontSize: 17,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: -0.41,
        textAlign: "center",
        color: palette.white
    }
});

export default styles;