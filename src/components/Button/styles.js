// @flow

import { StyleSheet } from 'react-native';

import merge from 'lodash/merge';

import type { ObjectOfStringsType, ObjectOfObjectsType, ThemeShapeType } from '../../types';
import darkenOrLighten from '../../utils/darkenOrLighten';
import { COLORS, ICON_POSITIONS, ROUNDING, SIZES, STATES, VARIANTS } from './constants';

export type StylesType = {
    base: {
        container: StyleSheet.Styles,
        text: StyleSheet.Styles,
        touchable: StyleSheet.Styles,
    },
    colors: ObjectOfObjectsType,
    iconPositions: ObjectOfObjectsType,
    rounding: ObjectOfObjectsType,
    sizes: ObjectOfObjectsType,
    variants: ObjectOfObjectsType,
};

export default ({ colors, radiuses, spacing, typography }: ThemeShapeType): StylesType => {
    const allColors: ObjectOfStringsType = merge({}, COLORS, colors.palette);
    const colorOptions: ObjectOfObjectsType = {};

    Object.keys(allColors).forEach((colorName: string) => {
        const color = colors.palette[colorName] || colorName;

        colorOptions[colorName] = {
            [STATES.active]: {
                container: {
                    backgroundColor: darkenOrLighten(color),
                    borderColor: darkenOrLighten(color),
                },
                text: {
                    color: darkenOrLighten(color),
                },
            },
            [STATES.disabled]: {
                container: {
                    backgroundColor: darkenOrLighten(color, 0.5),
                    borderColor: darkenOrLighten(color, 0.5),
                },
                text: {
                    color: darkenOrLighten(color, 0.5),
                },
            },
            [STATES.inactive]: {
                container: {
                    backgroundColor: color,
                    borderColor: color,
                },
                text: {
                    color,
                },
            },
        };
    });

    return {
        base: {
            container: {
                ...StyleSheet.absoluteFillObject,
                alignItems: 'center',
                borderWidth: 1,
                justifyContent: 'center',
                overflow: 'hidden',
            },
            text: {
                fontWeight: typography.fontWeights.medium,
                textAlign: 'center',
            },
            touchable: {
                alignSelf: 'stretch',
                position: 'relative',
            },
        },
        colors: colorOptions,
        iconPositions: {
            [ICON_POSITIONS.bottom]: {
                iconContainer: {
                    marginTop: spacing.small,
                },
            },
            [ICON_POSITIONS.left]: {
                container: {
                    flexDirection: 'row',
                },
                iconContainer: {
                    marginRight: spacing.small,
                },
            },
            [ICON_POSITIONS.right]: {
                container: {
                    flexDirection: 'row',
                },
                iconContainer: {
                    marginLeft: spacing.small,
                },
            },
            [ICON_POSITIONS.top]: {
                iconContainer: {
                    marginBottom: spacing.small,
                },
            },
        },
        rounding: {
            [ROUNDING.normal]: {
                borderRadius: radiuses.small,
            },
            [ROUNDING.rounded]: {
                borderRadius: 1000,
            },
            [ROUNDING.sharp]: {
                borderRadius: 0,
            },
        },
        sizes: {
            [SIZES.large]: {
                container: {
                    paddingHorizontal: spacing.huge,
                    paddingVertical: spacing.large,
                },
                text: {
                    fontSize: typography.fontSizes.large,
                },
            },
            [SIZES.medium]: {
                container: {
                    paddingHorizontal: spacing.large,
                    paddingVertical: spacing.medium,
                },
                text: {
                    fontSize: typography.fontSizes.medium,
                },
            },
            [SIZES.small]: {
                container: {
                    paddingHorizontal: spacing.medium,
                    paddingVertical: spacing.small,
                },
                text: {
                    fontSize: typography.fontSizes.small,
                },
            },
        },
        variants: {
            [VARIANTS.default]: {
                text: {
                    color: 'white',
                },
            },
            [VARIANTS.flat]: {
                container: {
                    backgroundColor: 'transparent',
                    borderColor: 'transparent',
                },
            },
            [VARIANTS.outlined]: {
                container: {
                    backgroundColor: 'transparent',
                },
            },
        },
    };
};
