const webpack = require('webpack');

module.exports = {
    entry: {
        main: './root/src/scripts/style.js'
    },
    output: {
        filename: './root/dist/scripts/main.js'
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
    }
};
