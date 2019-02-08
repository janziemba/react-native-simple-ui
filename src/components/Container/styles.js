// @flow

import { StyleSheet } from 'react-native';

import type { ThemeShapeType } from '../../types';

export type StylesType = {
    alignment: {
        center: StyleSheet.Styles,
    },
    base: StyleSheet.Styles,
    margin: {
        [name: string]: StyleSheet.Styles,
    },
    padding: {
        [name: string]: StyleSheet.Styles,
    },
};

export default ({ spacing }: ThemeShapeType): {} => {
    const marginOptions: {} = {};
    const paddingOptions: {} = {};

    Object.keys(spacing).forEach((name: string) => {
        marginOptions[name] = {
            margin: spacing[name],
        };
        paddingOptions[name] = {
            padding: spacing[name],
        };
    });

    return {
        alignment: {
            center: {
                alignItems: 'center',
                justifyContent: 'center',
            },
        },
        base: {
            flex: 1,
        },
        margin: marginOptions,
        padding: paddingOptions,
    };
};
