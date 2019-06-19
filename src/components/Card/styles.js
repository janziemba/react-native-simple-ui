// @flow

import { StyleSheet } from 'react-native';

import type { ThemeShapeType } from '../../types';

export type StylesType = {
    base: StyleSheet.Styles,
};

export default ({ colors, radiuses }: ThemeShapeType): StylesType => ({
    base: {
        container: {
            alignItems: 'center',
            backgroundColor: 'white',
            borderColor: colors.palette.dark,
            borderRadius: radiuses.tiny,
            borderWidth: StyleSheet.hairlineWidth,
            flex: 1,
            justifyContent: 'center',
        },
    },
});
