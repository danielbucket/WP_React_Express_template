const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'main.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
  },

  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    new HtmlWebpackPlugin({
      title: 'Webpack 5',
      filename: 'index.html',
      template: './template.hbs',
      description: 'Webpack 5',
      minify: true,
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
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader'
        ],
      },
      {
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				exclude: /node_modules/,
				type: 'asset/resource',
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[contenthash].[ext]',
              outputPath: '/assets'
            }
          }
        ]
			},
      {
				test: /\.hbs$/,
				exclude: /node_modules/,
        loader: 'handlebars-loader',
			}
    ]
  }
}