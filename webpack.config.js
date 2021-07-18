require('dotenv').config();
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PORT = process.env.PORT || 3000;
const DEV = process.env.MODE === 'development';
const BASE_MINIMIZER = [new CssMinimizerPlugin()];
const MINIMIZER = DEV ? BASE_MINIMIZER : [...BASE_MINIMIZER, new TerserJSPlugin()];

const config = {
    mode : process.env.MODE,
    entry : { bundle : path.join(__dirname, 'src/index.tsx') },
    output : { path : path.join(__dirname, '/build') },
    resolve : { extensions : ['.js', '.json', '.ts', '.tsx', '.scss'] },
    devtool : DEV ? 'cheap-module-source-map' : false,
    module : {
        rules : [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            },
            {
                test : /\.(js|jsx)$/,
                exclude : /node_modules/,
                loader : 'babel-loader'
            },
            {
                test : /\.(scss|css)$/,
                use : [
                    MiniCssExtractPlugin.loader,
                    {
                        loader : 'css-loader',
                        options : {
                            modules : {
                                localIdentName : DEV ? '[local]' : '[hash:base64:5]',
                                exportLocalsConvention : 'camelCase'
                            },
                            sourceMap : true
                        }
                    },
                    {
                        loader : 'sass-loader',
                        options : {
                            sourceMap : true,
                            sassOptions : {
                                includePaths : [
                                    path.resolve(__dirname, 'node_modules'),
                                    path.resolve(__dirname, 'src')
                                ]
                            },
                            additionalData : `@import 'global.scss';`
                        }
                    }
                ]
            },
            {
                test : /\.(jpg|png|svg|ico|icns)$/,
                loader : 'file-loader',
                options : {
                    name : DEV ? 'images/[name].[ext]' : '[contenthash].[ext]'
                }
            },
            {
                test : /\.(png|jpg|gif)$/i,
                use : [{
                    loader : 'url-loader',
                    options : { limit : 8192 }
                }]
            }
        ]
    },
    optimization : {
        minimize : true,
        minimizer : MINIMIZER,
        splitChunks : DEV ? {} : {
            cacheGroups: {
                vendor: {
                    test : /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    name: 'vendor',
                    enforce: true
                }
            }
        }
    },
    plugins : [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename : '[name].css' }),
        new Dotenv({
            path : path.resolve(__dirname, './.env'),
            silent : true
        }),
        new HtmlPlugin({
            template : path.resolve(__dirname, './public/index.html')
        })
    ],
    devServer : {
        host : 'localhost',
        port : PORT,
        historyApiFallback : true,
        open : true
    }
};

module.exports = config;