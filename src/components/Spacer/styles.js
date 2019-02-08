// @flow

import { StyleSheet } from 'react-native';

import type { ThemeShapeType } from '../../types';

export type StylesType = {
    [name: string]: StyleSheet.Styles,
};

export default ({ spacing }: ThemeShapeType): StylesType => {
    const options: {} = {};

    Object.keys(spacing).forEach((spacingName: string) => {
        options[spacingName] = {
            height: spacing[spacingName],
            width: spacing[spacingName],
        };
    });

    return options;
};
