var webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
// const dev process.env.NODE_ENV === "dev";

const extractSass = new ExtractTextPlugin({
    filename: "style.css"
});

module.exports = {
    entry: './index.js',
    watch: true,
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: 'style.js'
    },
    devtool: "cheap-module-eval-source-map",
    module: {
        rules: [{
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }],
                fallback: "style-loader"
            })
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: [{
                loader: 'babel-loader'
            }]
        }]
    },
    plugins: [
        extractSass,
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        })
    ],
}