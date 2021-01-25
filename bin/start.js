#!/usr/bin/env node
const yargs = require('yargs/yargs');
//port 参数处理
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;
let port = argv.port;
if (!port) {
  port = 8786;
}
const startLocalMock = require('../index');
startLocalMock(port);
