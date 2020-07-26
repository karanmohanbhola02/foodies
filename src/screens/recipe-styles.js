import { StyleSheet } from 'react-native';
import { palette } from '../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.gray2
    },
    details: {
        padding: 16,
        flex: 1
    },
    header: { 
        zIndex: 1, 
        position: 'absolute', 
        width: '100%' 
    }
});

export default styles;