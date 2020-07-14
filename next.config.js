module.exports = {
    exportTrailingSlash: true,
    webpack: (config, { isServer }) => {
        config.module.rules.push(
            {
                test: /\.txt$/,
                use: 'raw-loader'
            }
        );

        if (!isServer) {
            config.node = {
                fs: 'empty'
            }
        }

        return config
    },
};