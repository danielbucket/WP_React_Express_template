const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')
const path = require('path')

module.exports = (env) => {
  const config = env.development ?
  require('./webpack.dev.js') : require('./webpack.prod.js')

  return merge(config, {
    mode: env.development ? 'development' : 'production',
    entry: './src/index.js',
    output: {
      filename: 'main.[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      clean: true
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'WP_React_Express_boilerplate',
        filename: 'index.html',
        template: path.resolve(__dirname, 'templates', 'template.hbs'),
        description: 'A boilerplate for a project using Webpack, React, and Express',
        minify: true,
        chunks: ['main']
      })
    ],
    module: {
      rules: [
        {
          test: /\.(?:js|jsx|mjs|cjs)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              targets: "defaults",
              presets: [
                ["@babel/preset-env"],
                ["@babel/preset-react"]
              ],
              plugins: [
                ["@babel/transform-class-properties"],
                ["@babel/plugin-transform-runtime"]
              ]
            }
          }
        },
        {
          test: /\.hbs$/,
          exclude: /node_modules/,
          use: ['handlebars-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          exclude: /node_modules/,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          exclude: /node_modules/,
          type: 'asset/resource',
        },
      ]
    }
  })
}