// @flow

import Color from 'color';

export default function darkenOrLighten(color: string, ratio: number = 0.25): string {
    const c: typeof Color = Color(color);

    const modifiedColor: typeof Color = c.luminosity() > 0.5 ? c.darken(ratio) : c.lighten(ratio);

    return modifiedColor.toString();
}
