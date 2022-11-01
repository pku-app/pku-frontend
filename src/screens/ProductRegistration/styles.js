import { StyleSheet } from 'react-native';
import { COLORS } from '../../components/ColorPallete'

export const Style = StyleSheet.create({
    logo: {
        top: 42,
        alignSelf: 'center',
        width: 200,
        height: 150,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 200,
        left: 0,
        top: 0,
        backgroundColor: COLORS.secondary,
        borderBottomLeftRadius: 50,
    },
    btn: {
        backgroundColor: COLORS.tertiary,
        alignSelf: 'center',
    },
    errMessage: {
        position: 'absolute',
        top: 25,
        opacity: 0.8,
        alignSelf: 'center',
    },
});