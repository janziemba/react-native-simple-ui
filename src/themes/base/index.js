// @flow

import type { ThemeShapeType } from '../../types';
import colors from './colors';
import radiuses from './radiuses';
import spacing from './spacing';
import typography from './typography';

const base: ThemeShapeType = {
    colors,
    components: {},
    radiuses,
    spacing,
    typography,
};

export default base;
