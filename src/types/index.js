// @flow

import { StyleSheet } from 'react-native';

export type ObjectOfStringsType = {
    [name: string]: string,
};

export type ThemeType = {
    colors: {
        layout: ObjectOfStringsType,
        palette: ObjectOfStringsType,
        social: ObjectOfStringsType,
        text: ObjectOfStringsType,
    },
    radiuses: {
        tiny: number,
        small: number,
        medium: number,
        large: number,
        huge: number,
        gigantic: number,
    },
    spacing: {
        tiny: number,
        small: number,
        medium: number,
        large: number,
        huge: number,
        gigantic: number,
    },
    typography: {
        fontFamily: string,
        fontSizes: {
            large: number,
            medium: number,
            small: number,
        },
        fontWeights: {
            bold: string,
            medium: string,
            normal: string,
        },
        iconSet: string,
        sizes: {
            h1: StyleSheet.Styles,
            h2: StyleSheet.Styles,
            h3: StyleSheet.Styles,
            h4: StyleSheet.Styles,
            h5: StyleSheet.Styles,
            h6: StyleSheet.Styles,
            normal: StyleSheet.Styles,
            small: StyleSheet.Styles,
        },
    },
};

export type ThemeShapeType = $Shape<{
    ...ThemeType,
    colors: $Shape<$PropertyType<ThemeType, 'colors'>>,
    radiuses: $Shape<$PropertyType<ThemeType, 'radiuses'>>,
    spacing: $Shape<$PropertyType<ThemeType, 'spacing'>>,
    typography: $Shape<$PropertyType<ThemeType, 'typography'>>,
}>;
