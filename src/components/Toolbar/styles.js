// @flow

import merge from 'lodash/merge';

import { themeType } from '../../types';
import { COLORS } from './constants';

export default ({ colors, spacing }: themeType) : {} => {
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
