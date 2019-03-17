module.exports = (api) => {
    api.cache(true);

    return {
        plugins: [
            [
                'module-resolver',
                {
                    alias: {
                        'react-native-vector-icons': '@expo/vector-icons',
                    },
                },
            ],
        ],
        presets: ['babel-preset-expo'],
    };
};
