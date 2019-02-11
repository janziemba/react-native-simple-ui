// @flow

import { StyleSheet } from 'react-native';

import merge from 'lodash/merge';

import type { ObjectOfStringsType, ObjectOfStyleSheetsType, ThemeShapeType } from '../../types';
import { COLORS } from './constants';

export type StylesType = {
    base: {
        container: StyleSheet.Styles,
    },
    colors: ObjectOfStyleSheetsType,
};

export default ({ colors, spacing }: ThemeShapeType): StylesType => {
    const allColors: ObjectOfStringsType = merge({}, COLORS, colors.palette);
    const colorOptions: ObjectOfStyleSheetsType = {};

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
