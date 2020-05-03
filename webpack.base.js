const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');
const cleanWebPackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve('./dist')
    },
    resolve: {
        modules: [
            path.join(__dirname, 'src', 'test'),
            'node_modules', 'src', 'test'
        ],
        extensions: ['.js', '.jsx'],
        alias: {
            'react': path.resolve('node_modules/react'),
            'react-dom': path.resolve('node_modules/react-dom')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s(c|a)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ]
    },
    plugins: [
        new htmlWebPackPlugin({
            template: 'index.html'
        }),
        new cleanWebPackPlugin()
    ],
    devServer: {
        host: 'localhost',
        port: '3001',
        open: true
    }
}