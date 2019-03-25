const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const chalk = require('chalk');
const log = console.log;

const app = express();
const config = require('./webpack.dev.js');
const compiler = webpack(config);

const argv = process.argv || []
let pIndex = argv.indexOf('-p')
let port = 8080
if (pIndex != -1 && !isNaN(argv[pIndex + 1])) {
    port = argv[pIndex + 1]
}

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));
// Serve the files on port.
app.listen(port, function () {
  log(chalk.blue.bgYellow.bold(`Example app listening on port ${port}!\n`));
});