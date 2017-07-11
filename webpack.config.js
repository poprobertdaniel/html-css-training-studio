const webpack = require('webpack');
const HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './root/src/scripts/main.js'
    },
    output: {
        path: '/root/dist/scripts',
        filename: 'main.js',
        publicPath: '/root/dist/scripts'
    },
    watch: true,
    devtool: 'source-map',
    module: {
        loaders: [
          {
            test: /\.scss$/,
            exclude: /node_modules/,
            loaders: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
          },
          {
            test: /\.html$/,
            loader: "raw-loader"
          }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};
