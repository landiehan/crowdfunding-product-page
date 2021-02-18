const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {  
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'public/index.html')
  })],
  mode: 'development'
};