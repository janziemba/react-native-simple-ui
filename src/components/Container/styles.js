// @flow

import { StyleSheet } from 'react-native';

export type StylesType = {
    alignment: {
        center: StyleSheet.Styles,
        right: StyleSheet.Styles,
    },
    base: StyleSheet.Styles,
};

export default (): StylesType => ({
    alignment: {
        center: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        right: {
            alignItems: 'flex-end',
        },
    },
    base: {
        flex: 1,
    },
});
