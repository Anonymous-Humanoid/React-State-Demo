const assert = require('node:assert');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Getting env vars from nodemon config
const NODE_ENV = /** @type {'development' | 'production' | undefined} */ (process.env.NODE_ENV);
const OUTPUT_DIR = /** @type {string} */ (process.env.OUTPUT_DIR);

// Verifying node env
assert.ok(NODE_ENV != null, 'Node environment must be specified');
assert.ok(OUTPUT_DIR != null, 'Bundle output directory must be specified');

// Configuring webpack
const FILE_EXTS = [
    'jpg',
    'jpeg',
    'png',
    'gif',
    'eot',
    'otf',
    'svg',
    'ttf',
    'woff',
    'woff2'
];

/** @type {webpack.Configuration} */
let config = {
    mode: NODE_ENV,
    devtool: 'cheap-module-source-map',
    entry: {
        index: path.join(__dirname, 'src', 'index.tsx')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, OUTPUT_DIR),
        clean: true
    },
    resolve: {
        extensions: FILE_EXTS.map((extension) => '.' + extension).concat([
            '.ts',
            '.tsx', // ts/tsx must come before js/jsx
            '.js',
            '.jsx',
            '.css'
        ])
    },
    devServer: {
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                exclude: /node_modules/
            },
            {
                // ts/tsx must come before js/jsx
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: require.resolve('ts-loader'),
                        options: {
                            transpileOnly: true
                        }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'source-map-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: 'index.html',
            chunks: ['index'],
            cache: false
        })
    ],
    infrastructureLogging: {
        level: 'info'
    }
};

// Webpack >= 2.0.0 no longer allows custom properties in configuration
module.exports = config;
