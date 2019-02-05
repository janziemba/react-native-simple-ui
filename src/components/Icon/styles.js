import merge from 'lodash/merge';

import { COLORS } from './constants';

export default ({ colors }) => {
    const allColors = merge({}, COLORS, colors.palette, colors.social);
    const colorOptions = {};

    Object.keys(allColors).forEach((colorName) => {
        const color = allColors[colorName];

        colorOptions[colorName] = {
            color,
        };
    });

    return {
        colors: colorOptions,
    };
};
