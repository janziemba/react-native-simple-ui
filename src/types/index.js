export type themeType = {
    colors: {
        layout: {},
        palette: {},
        theme: {},
        typography: {},
    },
    radiuses: {
        tiny: number,
        small: number,
        medium: number,
        large: number,
        huge: number,
        gigantic: number,
    },
    spacing: {
        tiny: number,
        small: number,
        medium: number,
        large: number,
        huge: number,
        gigantic: number,
    },
    typography: {
        fontFamily: string,
        fontSizes: {
            large: number,
            medium: number,
            small: number,
        },
        fontWeights: {
            bold: string,
            medium: string,
            normal: string,
        },
        iconSet: string,
        sizes: {
            h1: {},
            h2: {},
            h3: {},
            h4: {},
            h5: {},
            h6: {},
            normal: {},
            small: {},
        },
    },
};
