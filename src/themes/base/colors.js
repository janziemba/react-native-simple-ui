// @flow

import type { ThemeShapeType } from '../../types';

const colors: $PropertyType<ThemeShapeType, 'colors'> = {
    layout: {
        backgroundColor: '#ffffff',
    },
    palette: {
        danger: '#ff4136',
        dark: '#484848',
        disabled: '#999999',
        info: '#75caeb',
        light: '#f6f6f6',
        primary: '#158cba',
        success: '#28b62c',
        warning: '#ff851b',
    },
    text: {
        disabled: '#999999',
        placeholder: '#e2e4e6',
        primary: '#3d3d3d',
        secondary: '#9e9e9e',
    },
};

export default colors;
