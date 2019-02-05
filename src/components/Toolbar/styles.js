import merge from 'lodash/merge';

import { COLORS } from './constants';

export default ({ colors, spacing }) => {
    const allColors = merge({}, COLORS, colors.palette);
    const colorOptions = {};

    Object.keys(allColors).forEach((colorName) => {
        const color = colors.palette[colorName] || colorName;

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
