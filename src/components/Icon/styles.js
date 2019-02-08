// @flow

import { StyleSheet } from 'react-native';

import merge from 'lodash/merge';

import type { ThemeShapeType } from '../../types';
import { COLORS } from './constants';

export type StylesType = {
    colors: {
        [name: string]: StyleSheet.Styles,
    },
};

export default ({ colors }: ThemeShapeType): StylesType => {
    const allColors: {} = merge({}, COLORS, colors.palette, colors.social);
    const colorOptions: {} = {};

    Object.keys(allColors).forEach((colorName: string) => {
        const color = allColors[colorName];

        colorOptions[colorName] = {
            color,
        };
    });

    return {
        colors: colorOptions,
    };
};
