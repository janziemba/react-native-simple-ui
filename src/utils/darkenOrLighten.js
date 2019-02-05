import Color from 'color';

export default function darkenOrLighten(color, ratio = 0.25) {
    const c = Color(color);

    const modifiedColor = c.luminosity() > 0.5 ? c.darken(ratio) : c.lighten(ratio);

    return modifiedColor.toString();
}
