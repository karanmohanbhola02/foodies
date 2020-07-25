import { StyleSheet } from 'react-native';
import { palette } from '../../theme';

const styles = StyleSheet.create({
    separator: {
        height: 1,
        backgroundColor: palette.gray2
    },
    buttonContainer: {
        padding: 16, 
        borderTopWidth: 1,
        borderTopColor: palette.gray2
    },
    listContainer: {
        flex: 1
    },
    modalStyle: {
        height: '60%'
    }
});

export default styles;
