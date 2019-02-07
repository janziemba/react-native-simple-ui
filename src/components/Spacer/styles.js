// @flow

import { themeType } from '../../types';

/* eslint-disable sort-keys */
export default ({ spacing }: themeType): {} => {
    const options: {} = {};

    Object.keys(spacing).forEach((spacingName: string) => {
        options[spacingName] = {
            height: spacing[spacingName],
            width: spacing[spacingName],
        };
    });

    return options;
};
