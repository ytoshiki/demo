const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'sample.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      path: __dirname + '/dist',
      filename: 'index.html',
      template: __dirname + '/src/index.html'
    })
  ]

};