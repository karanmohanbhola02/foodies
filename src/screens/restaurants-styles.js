import { StyleSheet } from 'react-native';
import { palette } from '../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.gray2
    },
    listContainer: {
        paddingTop: 0,
        paddingBottom: 16,
        paddingHorizontal: 16,
        flex: 1
    }
});

export default styles;