import { StyleSheet, Dimensions } from 'react-native';
import { palette } from '../../theme';

const styles = StyleSheet.create({
    overlay: {
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.72)',
        ...StyleSheet.absoluteFillObject
    },
    container: { 
        opacity: 1,
        backgroundColor: palette.white,
        width: '100%',
        height: '70%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    }
});

export default styles;
