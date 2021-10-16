const nodeEnv = process.env.NODE_ENV;

module.exports = {
    publicPath: nodeEnv === 'production' ? '/vue-tasks-list' : '/',
    devServer: {
        port: 9000
    }
};
