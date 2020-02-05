/// <binding ProjectOpened='Watch - Development' />
"use strict";
const webpack = require("webpack");
const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');


const conf = {
    context: path.resolve(__dirname),
    cache: true,
    entry: {
        module: "./module.ts"
    },
    output: {
        path: path.join(__dirname,'../Build/Output/Debug/dist'),
        filename: "[name].js",
        libraryTarget: 'commonjs'
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
                use: ['style-loader', 'css-loader'],
                include: [
                    path.resolve(__dirname)
                ]
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
    ],
    plugins: [
        new CleanWebpackPlugin('../Build/Output/Debug/dist', { allowExternal: true }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new CopyWebpackPlugin([
            { from: 'plugin.json', to: '.' },
            { from: 'README.md', to: '.' },
            { from: 'img/*', to: '.' },
            { from: 'partial/*', to: '.' },
        ])
    ]
};


module.exports = (env, argv) => {
    if (argv.mode === 'development')
    {
        return conf;
    }
    if (argv.mode === 'production') {

        conf.output.path = path.join(__dirname, '../Build/Output/Release/dist');
        conf.plugins[0] = new CleanWebpackPlugin('../Build/Output/Release/dist', { allowExternal: true });
        conf.devtool = false;

        return conf;
    }

    return conf;

};