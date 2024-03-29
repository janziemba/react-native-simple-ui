// @flow

import { StyleSheet } from 'react-native';

import merge from 'lodash/merge';

import type { ObjectOfStringsType, ObjectOfStyleSheetsType, ThemeShapeType } from '../../types';
import { COLORS, SIZES } from './constants';

export type StylesType = {
    base: StyleSheet.Styles,
    colors: ObjectOfStyleSheetsType,
    sizes: ObjectOfStyleSheetsType,
};

export default ({ colors, spacing, typography }: ThemeShapeType): StylesType => {
    const allColors: ObjectOfStringsType = merge({}, COLORS, colors.palette);
    const colorOptions: ObjectOfStyleSheetsType = {};

    Object.keys(allColors).forEach((colorName: string) => {
        const color: string = allColors[colorName];

        colorOptions[colorName] = {
            color,
        };
    });

    return {
        base: {
            color: colors.text.primary,
            fontFamily: typography.fontFamily,
            textAlign: 'center',
        },
        colors: colorOptions,
        sizes: {
            [SIZES.h1]: {
                ...typography.sizes.h1,
                marginBottom: spacing.medium,
            },
            [SIZES.h2]: {
                ...typography.sizes.h2,
                marginBottom: spacing.medium,
            },
            [SIZES.h3]: {
                ...typography.sizes.h3,
                marginBottom: spacing.medium,
            },
            [SIZES.h4]: {
                ...typography.sizes.h4,
                marginBottom: spacing.medium,
            },
            [SIZES.h5]: {
                ...typography.sizes.h5,
                marginBottom: spacing.small,
            },
            [SIZES.h6]: {
                ...typography.sizes.h6,
                marginBottom: spacing.small,
            },
            [SIZES.normal]: {
                ...typography.sizes.normal,
            },
            [SIZES.small]: {
                ...typography.sizes.small,
            },
        },
    };
};
