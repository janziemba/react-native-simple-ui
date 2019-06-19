// @flow

import { StyleSheet } from 'react-native';

import merge from 'lodash/merge';

import type { ObjectOfStringsType, ObjectOfStyleSheetsType, ThemeShapeType } from '../../types';
import { COLORS } from './constants';

export type StylesType = {
    base: {
        centerElement: StyleSheet.Styles,
        container: StyleSheet.Styles,
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
            container: {
                base: {
                    backgroundColor: color,
                    borderColor: color,
                },
            },
        };
    });

    return {
        base: {
            centerElement: {
                flexDirection: 'row',
                justifyContent: 'center',
            },
            container: {
                base: {
                    alignItems: 'center',
                    height: 56,
                    justifyContent: 'center',
                },
            },
            leftElement: {
                flexDirection: 'row',
            },
            rightElement: {
                flexDirection: 'row',
                justifyContent: 'flex-end',
            },
        },
        colors: colorOptions,
    };
};
