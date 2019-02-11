// @flow

import merge from 'lodash/merge';

import type { ObjectOfStringsType, ObjectOfStyleSheetsType, ThemeShapeType } from '../../types';
import { COLORS } from './constants';

export type StylesType = {
    colors: ObjectOfStyleSheetsType,
};

export default ({ colors }: ThemeShapeType): StylesType => {
    const allColors: ObjectOfStringsType = merge({}, COLORS, colors.palette, colors.social);
    const colorOptions: ObjectOfStyleSheetsType = {};

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
