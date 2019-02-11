// @flow

import { StyleSheet } from 'react-native';

import type { ObjectOfObjectsType, ObjectOfStyleSheetsType, ThemeShapeType } from '../../types';

export type StylesType = {
    alignment: {
        center: StyleSheet.Styles,
    },
    base: StyleSheet.Styles,
    margin: ObjectOfStyleSheetsType,
    padding: ObjectOfStyleSheetsType,
};

export default ({ spacing }: ThemeShapeType): StylesType => {
    const marginOptions: ObjectOfObjectsType = {};
    const paddingOptions: ObjectOfObjectsType = {};

    Object.keys(spacing).forEach((name: string) => {
        marginOptions[name] = {
            margin: spacing[name],
        };
        paddingOptions[name] = {
            padding: spacing[name],
        };
    });

    return {
        alignment: {
            center: {
                alignItems: 'center',
                justifyContent: 'center',
            },
        },
        base: {
            flex: 1,
        },
        margin: marginOptions,
        padding: paddingOptions,
    };
};
