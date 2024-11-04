const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './server/server.mjs',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  externals: [require('webpack-node-externals')()],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, './server/.env')
    })
  ],
  mode: 'production'
};
