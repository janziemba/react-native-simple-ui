// @flow

import { StyleSheet } from 'react-native';

import merge from 'lodash/merge';

import type { ObjectOfStringsType, ObjectOfStyleSheetsType, ThemeShapeType } from '../../types';
import { COLORS } from './constants';

export type StylesType = {
    base: StyleSheet.Styles,
    colors: ObjectOfStyleSheetsType,
};

export default ({ colors }: ThemeShapeType): StylesType => {
    const allColors: ObjectOfStringsType = merge({}, COLORS, colors.palette);
    const colorOptions: ObjectOfStyleSheetsType = {};

    Object.keys(allColors).forEach((colorName: string) => {
        const color: string = colors.palette[colorName] || colorName;

        colorOptions[colorName] = {
            backgroundColor: color,
        };
    });

    return {
        base: {
            backgroundColor: colors.palette.dark,
            height: StyleSheet.hairlineWidth,
        },
        colors: colorOptions,
    };
};
