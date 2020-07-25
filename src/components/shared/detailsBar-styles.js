import { StyleSheet } from 'react-native';
import { palette } from '../../theme';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        backgroundColor: palette.white,
        shadowColor: 'rgba(0, 0, 0, 0.08)',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 0,
        shadowOpacity: 1
    }
});

export default styles;