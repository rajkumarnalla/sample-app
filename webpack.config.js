const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: './build.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }]
    },
    plugins: [
        new CleanWebpackPlugin('./dist', {
            beforeEmit: true
        }),
        new HtmlWebPackPlugin({
            template: "./index.html",
            filename: "./index.html"
        })
    ]
}