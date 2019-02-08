// @flow

import { StyleSheet } from 'react-native';

export type StylesType = {
    base: StyleSheet.Styles,
    directions: {
        column: StyleSheet.Styles,
        row: StyleSheet.Styles,
    },
};

export default (): StylesType => ({
    base: {
        flexShrink: 1,
    },
    directions: {
        column: {
            flexDirection: 'column',
        },
        row: {
            flexDirection: 'row',
        },
    },
});
