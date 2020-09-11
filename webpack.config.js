const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/should_reads.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react"    
          ]
        }
      }
    ]
  },
  devtool: 'source-map',
};