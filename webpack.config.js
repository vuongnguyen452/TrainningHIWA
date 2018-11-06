const debug = process.env.NODE_ENV !== "production";
const htmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        // 'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, './src/index.js'),
    ],
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ['react', 'es2015', 'stage-0'],
                plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
            }
        },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                // loader: 'file-loader?name=localhost/src/images/[name].[ext]'
                loader: 'url-loader?limit=9000'
            }]
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        historyApiFallback: true,
        inline: true
    },
    devtool: "eval-source-map",
    plugins: debug ? [] : [
            new CleanWebpackPlugin('dist', {
                root: __dirname,
                verbose: true,
                dry: false
            }),
            new htmlWebpackPlugin({
                template: './src/index.html'
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"'
                }
            })
        ],
};
