const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 4020 // port 4020 is the devServer port found in webpack.dev.js

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpackk-hot-middleware')
  const config = require('../webpack.common.js')('develpment')
  const compiler = webpack(config)

  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    writeToDisk: true
  }))
  app.use(webpackHotMiddleware(compiler))
}

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.resolve(__dirname, '../dist')))

app.use('/', (req,res) => {
  res.send(path.join(__dirname, '../dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})