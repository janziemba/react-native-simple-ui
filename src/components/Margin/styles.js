// @flow

import type { ObjectOfStyleSheetsType, ThemeShapeType } from '../../types';

export type StylesType = ObjectOfStyleSheetsType;

export default ({ spacing }: ThemeShapeType): StylesType => {
    const options: {} = {};

    Object.keys(spacing).forEach((spacingName: string) => {
        options[spacingName] = {
            margin: spacing[spacingName],
        };
    });

    return options;
};
