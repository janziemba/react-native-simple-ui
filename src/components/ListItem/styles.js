// @flow

import { StyleSheet } from 'react-native';

import merge from 'lodash/merge';

import type { ObjectOfStringsType, ObjectOfStyleSheetsType, ThemeShapeType } from '../../types';
import { COLORS } from './constants';

export type StylesType = {
    base: {
        centerElement: StyleSheet.Styles,
        innerContainer: StyleSheet.Styles,
        leftElement: StyleSheet.Styles,
        rightElement: StyleSheet.Styles,
    },
    colors: ObjectOfStyleSheetsType,
};

export default ({ colors }: ThemeShapeType): StylesType => {
    const allColors: ObjectOfStringsType = merge({}, COLORS, colors.palette);
    const colorOptions: ObjectOfStyleSheetsType = {};

    Object.keys(allColors).forEach((colorName: string) => {
        const color: string = colors.palette[colorName] || colorName;

        colorOptions[colorName] = {
            outerContainer: {
                backgroundColor: color,
            },
        };
    });

    return {
        base: {
            centerElement: {
                alignment: {
                    center: {
                        justifyContent: 'center',
                    },
                    left: {
                        justifyContent: 'flex-start',
                    },
                    right: {
                        justifyContent: 'flex-end',
                    },
                },
                base: {
                    flexDirection: 'row',
                },
            },
            innerContainer: {
                base: {
                    alignItems: 'center',
                    height: 56,
                    justifyContent: 'center',
                },
            },
            leftElement: {
                alignment: {
                    center: {
                        justifyContent: 'center',
                    },
                    left: {
                        justifyContent: 'flex-start',
                    },
                    right: {
                        justifyContent: 'flex-end',
                    },
                },
                base: {
                    flexDirection: 'row',
                },
            },
            rightElement: {
                alignment: {
                    center: {
                        justifyContent: 'center',
                    },
                    left: {
                        justifyContent: 'flex-start',
                    },
                    right: {
                        justifyContent: 'flex-end',
                    },
                },
                base: {
                    flexDirection: 'row',
                },
            },
        },
        colors: colorOptions,
    };
};
