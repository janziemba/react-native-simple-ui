/* eslint-disable sort-keys */
export default ({ spacing }) => {
    const options = {};

    Object.keys(spacing).forEach((spacingName) => {
        options[spacingName] = {
            height: spacing[spacingName],
            width: spacing[spacingName],
        };
    });

    return options;
};
