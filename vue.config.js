const NODE_ENV = process.env.NODE_ENV;

module.exports = {
    publicPath: NODE_ENV === 'production' ? '/vue-tasks-list/' : '/',
    devServer: {
        port: 9000
    },
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Vue Style';

                return args;
            });
    }
};
