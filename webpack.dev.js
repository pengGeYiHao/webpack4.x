const path = require('path');
const merge = require('webpack-merge');
const TimeFixPlugin = require('time-fix-plugin')
const webpack = require('webpack')
const common = require('./webpack.common.js');


module.exports = merge(common, {
  entry: {
    app: ['webpack-hot-middleware/client?noInfo=true&reload=true', './src/index.js'],
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  mode: "development",
  devtool: 'inline-source-map', // 开发环境中定位err
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new TimeFixPlugin(), // 命令行添加 --timefix 参数， 避免开发环境时短时间内多次保存多次编译,
    new webpack.NamedModulesPlugin()
  ],
});