const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    devServer: {
        contentBase: path.join(__dirname, '../docs'),
        compress: true,
        port: 3000
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
                'API_URI': JSON.stringify('https://minimalist-journaling.herokuapp.com/')
            },
        }),
    ]
})