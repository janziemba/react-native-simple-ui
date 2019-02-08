// @flow

import { StyleSheet } from 'react-native';

export type StylesType = {
    container: StyleSheet.Styles,
    content: StyleSheet.Styles,
    gradient: StyleSheet.Styles,
};

export default (): StylesType => ({
    container: {
        overflow: 'hidden',
    },
    content: {
        zIndex: 2,
    },
    gradient: {
        ...StyleSheet.absoluteFillObject,
        flexWrap: 'wrap',
        zIndex: 1,
    },
});
