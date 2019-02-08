// @flow

import type { ThemeShapeType } from '../../types';

/* eslint-disable sort-keys */
const radiuses: $PropertyType<ThemeShapeType, 'spacing'> = {
    tiny: 2,
    small: 4,
    medium: 6,
    large: 8,
    huge: 12,
    gigantic: 16,
};

export default radiuses;
