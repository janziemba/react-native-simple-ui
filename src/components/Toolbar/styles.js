// @flow

import { StyleSheet } from 'react-native';

import merge from 'lodash/merge';

import type { ThemeShapeType } from '../../types';
import { COLORS } from './constants';

export type StylesType = {
    base: {
        container: StyleSheet.Styles,
    },
    colors: {
        [name: string]: StyleSheet.Styles,
    },
};

export default ({ colors, spacing }: ThemeShapeType): StylesType => {
    const allColors: {} = merge({}, COLORS, colors.palette);
    const colorOptions: {} = {};

    Object.keys(allColors).forEach((colorName: string) => {
        const color: string = colors.palette[colorName] || colorName;

        colorOptions[colorName] = {
            container: {
                backgroundColor: color,
                borderColor: color,
            },
        };
    });

    return {
        base: {
            container: {
                alignItems: 'center',
                height: 56,
                padding: spacing.small,
            },
        },
        colors: colorOptions,
    };
};
