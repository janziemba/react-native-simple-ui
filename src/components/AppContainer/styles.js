// @flow

import Color from 'color';
import { StyleSheet } from 'react-native';

import type { ThemeShapeType } from '../../types';

export type StylesType = {
    bottomSafeArea: StyleSheet.Styles,
    content: StyleSheet.Styles,
    imageBackground: StyleSheet.Styles,
    imageBackgroundContent: StyleSheet.Styles,
    topSafeArea: StyleSheet.Styles,
    wrapper: StyleSheet.Styles,
};

export default ({ colors }: ThemeShapeType): StylesType => {
    const imageBackgroundColor: string = Color(colors.layout.backgroundColor)
        .alpha(0.96).rgb().toString();

    return {
        bottomSafeArea: {
            backgroundColor: colors.palette.primary,
            flex: 1,
        },
        content: {
            flex: 1,
        },
        imageBackground: {
            height: '100%',
            width: '100%',
        },
        imageBackgroundContent: {
            backgroundColor: imageBackgroundColor,
            flex: 1,
        },
        topSafeArea: {
            backgroundColor: colors.palette.primary,
            flex: 0,
        },
        wrapper: {
            backgroundColor: colors.layout.backgroundColor,
            flex: 1,
        },
    };
};
