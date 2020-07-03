let pageMethod = require('./util/getPages.js');
pages = pageMethod.pages();
module.exports = {
    pages,
    publicPath: process.env.NODE_ENV === 'production'
        ? '/app/'
        : '/',
    outputDir: 'dist/app',
    devServer: {
        host: 'localhost',
        port: '8080',
        proxy: {
            '/': {
                historyApiFallback: true,
                target: 'https://api.stage.shenzhoubb.com',
                ws: false,
                changeOrigin: true
            }
        },
        open: true
    },
}