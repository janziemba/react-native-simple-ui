// @flow

import { StyleSheet } from 'react-native';

import type { ThemeShapeType } from '../../types';

export type StylesType = {
    container: StyleSheet.Styles,
    overlay: StyleSheet.Styles,
};

export default ({ radiuses }: ThemeShapeType): StylesType => ({
    container: {
        backgroundColor: 'white',
        borderRadius: radiuses.small,
        width: '75%',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
        justifyContent: 'center',
        zIndex: 2,
    },
});
