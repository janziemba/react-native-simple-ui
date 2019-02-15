// @flow

import { StyleSheet } from 'react-native';

export type StylesType = {
    alignment: {
        center: StyleSheet.Styles,
    },
    base: StyleSheet.Styles,
};

export default (): StylesType => ({
    alignment: {
        center: {
            alignItems: 'center',
            justifyContent: 'center',
        },
    },
    base: {
        flex: 1,
    },
});
