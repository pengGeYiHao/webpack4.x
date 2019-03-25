const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new webpack.ProvidePlugin({
      React: 'React'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: path.resolve(__dirname, 'src'),
        use: 'file-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: path.resolve(__dirname, 'src'),
        use: 'file-loader'
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        include: path.resolve(__dirname, 'src'),
        loader: 'eslint-loader',
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        options: {
          'presets': ['@babel/preset-env']
        }
      }
    ]
  }
}
