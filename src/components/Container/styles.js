// @flow

import { themeType } from '../../types';

export default ({ spacing }: themeType): {} => {
    const marginOptions: {} = {};
    const paddingOptions: {} = {};

    Object.keys(spacing).forEach((name: string) => {
        marginOptions[name] = {
            margin: spacing[name],
        };
        paddingOptions[name] = {
            padding: spacing[name],
        };
    });

    return {
        alignment: {
            center: {
                alignItems: 'center',
                justifyContent: 'center',
            },
        },
        base: {
            flex: 1,
        },
        margin: marginOptions,
        padding: paddingOptions,
    };
};
