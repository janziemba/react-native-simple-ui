export default ({ spacing }) => {
    const marginOptions = {};
    const paddingOptions = {};

    Object.keys(spacing).forEach((name) => {
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
