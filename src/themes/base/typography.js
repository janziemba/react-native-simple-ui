// @flow

import { Platform } from 'react-native';

import { themeType } from '../../types';

const typography: themeType.typography = {
    fontFamily: Platform.select({
        android: 'Roboto',
        ios: 'System',
    }),
    fontSizes: {
        large: 16,
        medium: 14,
        small: 12,
    },
    fontWeights: {
        bold: '900',
        medium: '800',
        normal: '600', // 500 looks different on iOS and Android
    },
    iconSet: 'MaterialIcons',
    sizes: {
        h1: {
            fontSize: 31,
            fontWeight: '900',
        },
        h2: {
            fontSize: 25,
            fontWeight: '900',
        },
        h3: {
            fontSize: 19,
            fontWeight: '800',
        },
        h4: {
            fontSize: 17,
            fontWeight: '800',
        },
        h5: {
            fontSize: 16,
            fontWeight: '800',
        },
        h6: {
            fontSize: 15,
            fontWeight: '700',
        },
        normal: {
            fontSize: 14,
            fontWeight: '700',
        },
        small: {
            fontSize: 12,
        },
    },
};

export default typography;
