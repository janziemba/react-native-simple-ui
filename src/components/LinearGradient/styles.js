// @flow

import { StyleSheet } from 'react-native';

export default (): {} => ({
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
