const path = require('path')

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    port: 4020, // 'port 4020' is the default value assigned at server.js
    hot: true,
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    devMiddleware: {
      index: 'index.html',
      writeToDisk: true,
      serverSideRender: true
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [ "style-loader", "css-loader" ],
      }
    ]
  },
}