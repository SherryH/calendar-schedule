const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    index: [path.resolve(__dirname, './src/index.js')]
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(css)$/,
        exclude: [path.resolve(__dirname, './node_modules'), path.resolve(__dirname, 'common')],
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ]
      },
      {
        test: /\.(css)$/,
        include: [path.resolve(__dirname, './node_modules'), path.resolve(__dirname, 'common')],
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [htmlPlugin]
};
