const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (env, args) => {
  const development = args.mode === 'development';

  return {
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '@': path.resolve(__dirname, 'src/'),
      },
    },
    entry: ['@babel/polyfill', './src/index.jsx'],
    plugins: [
      new Dotenv(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        inject: 'head',
        template: path.join(__dirname, 'src/index.html'),
      }),
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'async',
      }),
      new webpack.DefinePlugin({
        'process.env': {
          MODE: JSON.stringify(args.mode),
        },
      }),
      new CopyPlugin(['./public']),
      new webpack.HotModuleReplacementPlugin(),
    ],
    devtool: development ? 'inline-source-map' : 'none',
    module: {
      rules: [
        {
          test: /.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.html$/,
          use: {
            loader: 'html-loader',
            options: { minimize: true },
          },
        },
      ],
    },
    devServer: {
      historyApiFallback: true,
      hot: true,
    },
    output: {
      publicPath: '/',
    },
  };
};
