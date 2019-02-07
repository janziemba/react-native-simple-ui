// @flow

import { StyleSheet } from 'react-native';

import { themeType } from '../../types';

export default ({ radiuses }: themeType): {} => ({
    container: {
        backgroundColor: 'white',
        borderRadius: radiuses.small,
        padding: 20,
        width: '75%',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
        justifyContent: 'center',
        zIndex: 2,
    },
});
