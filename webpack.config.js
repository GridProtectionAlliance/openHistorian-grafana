/// <binding ProjectOpened='Watch - Development' />
"use strict";
const webpack = require("webpack");
const path = require("path");

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname),
    cache: true,
    entry: {
        module: "./module.ts"

    },
    output: {
        path: path.resolve(__dirname),
        filename: "[name].js",
        libraryTarget: 'amd',
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "inline-source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".css"]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
                include: [
                    path.resolve(__dirname)
                ],
            },
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: "ts-loader" },
            {
                test: /\.js$/,
                enforce: "pre",
                loader: "source-map-loader"
            },
            { test: /\.(woff|woff2|ttf|eot|svg|png|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=100000" }
        ]
    },
    externals: [
    ]
};