// @flow

import Color from 'color';
import { StyleSheet } from 'react-native';

import merge from 'lodash/merge';

import type { ObjectOfStringsType, ObjectOfStyleSheetsType, ThemeShapeType } from '../../types';
import { COLORS } from './constants';

export type StylesType = {
    base: {
        container: StyleSheet.Styles,
        text: StyleSheet.Styles,
    },
    colors: ObjectOfStyleSheetsType,
};

export default ({ colors }: ThemeShapeType): StylesType => {
    const allColors: ObjectOfStringsType = merge({}, COLORS, colors.palette);
    const colorOptions: ObjectOfStyleSheetsType = {};

    Object.keys(allColors).forEach((colorName: string) => {
        const color: string = allColors[colorName];

        colorOptions[colorName] = {
            container: {
                backgroundColor: color,
            },
            text: {
                color: new Color(color).lightness() < 75 ? 'white' : 'black',
            },
        };
    });

    return {
        base: {
            container: {
                alignItems: 'center',
                borderRadius: 1000,
                justifyContent: 'center',
                overflow: 'hidden',
            },
            text: {
                color: 'white',
            },
        },
        colors: colorOptions,
    };
};
