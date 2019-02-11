// @flow

import colors from '../../themes/base/colors';
import type { ObjectOfStringsType } from '../../types';

export const COLORS: ObjectOfStringsType = {
    ...colors.palette,
    ...colors.social,
    black: 'black',
    white: 'white',
};

export const SIZES: ObjectOfStringsType = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    normal: 'normal',
    small: 'small',
};
