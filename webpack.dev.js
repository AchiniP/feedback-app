const merge = require('webpack-merge');
const base = require('./webpack.base');

module.exports = merge(base, {
    mode: 'development',
    devServer: {
        host: 'localhost',
        port: 3001,
        open: true
    }
});