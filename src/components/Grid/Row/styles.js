// @flow

import { StyleSheet } from 'react-native';

export type StylesType = {
    base: StyleSheet.Styles,
};

export default (): StylesType => ({
    base: {
        flexDirection: 'row',
    },
});
