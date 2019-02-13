// @flow

import colors from '../../themes/base/colors';
import type { ObjectOfStringsType } from '../../types';

export const COLORS: ObjectOfStringsType = {
    ...colors.palette,
    white: 'white',
};

export const ICON_POSITIONS: ObjectOfStringsType = {
    bottom: 'bottom',
    left: 'left',
    right: 'right',
    top: 'top',
};

export const ROUNDING: ObjectOfStringsType = {
    normal: 'normal',
    rounded: 'rounded',
    sharp: 'sharp',
};

export const SIZES: ObjectOfStringsType = {
    large: 'large',
    medium: 'medium',
    small: 'small',
};

export const STATES: ObjectOfStringsType = {
    active: 'active',
    disabled: 'disabled',
    inactive: 'inactive',
};

export const VARIANTS: ObjectOfStringsType = {
    default: 'default',
    flat: 'flat',
    outlined: 'outlined',
};
