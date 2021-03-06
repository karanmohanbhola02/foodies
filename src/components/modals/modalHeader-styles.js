import { StyleSheet } from 'react-native';
import { palette } from '../../theme';

const styles = StyleSheet.create({
    header: { 
        flexDirection: 'row', 
        padding: 16, 
        alignItems: 'center', 
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: palette.gray2
    },
    headerImage: { 
        width: 20, 
        height: 14
    },
    headerText: {
        fontSize: 17,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: -0.41,
        textAlign: "center",
        color: palette.darkLimeGreen
    },
    emptyView: { 
        width: 20
    }
});

export default styles;
