// @flow

import merge from 'lodash/merge';

import { themeType } from '../../types';
import { COLORS } from './constants';

export default ({ colors }: themeType): {} => {
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
