const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const TimeFixPlugin = require('time-fix-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js',
    // print: ['webpack-hot-middleware/client', './src/print.js']
  },
  output: {  // 生产环境不需要热更新
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  // output: {
  //   filename: '[name].js',
  //   path: path.resolve(__dirname, 'dist'),
  //   publicPath: '/'
  // },
  // mode: "production", // 生产环境
  // devtool: 'inline-source-map', // 开发环境中定位err
  plugins: [
    new CleanWebpackPlugin(),
    new ManifestPlugin(),
    // new webpack.HotModuleReplacementPlugin(), // 生产环境不需要热更新
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    // new TimeFixPlugin() // 命令行添加 --timefix 参数， 避免开发环境时短时间内多次保存多次编译
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: 'file-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader'
      }
    ]
  }
};