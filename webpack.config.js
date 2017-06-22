const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: './root/src/scripts/style.js'
    },
    output: {
        filename: './root/dist/scripts/index.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
          {
            test: /\.(sass|scss)$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader',
            ]
          }
        ]
    },
    plugins: [
        new ExtractTextPlugin('main.css')
    ]
};
