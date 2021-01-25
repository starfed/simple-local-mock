var path = require('path');
var express = require('express');
var mockMiddleware = require('luobo-mock-middleware');

module.exports = function startLocalMock(port) {
  var app = express();

  // 项目根目录的mock文件夹作为主文件夹
  app.use(mockMiddleware(path.join(__dirname, '../../mock')));
  app.use(express.static(path.join(__dirname, '../../')));

  app.listen(port, () =>
    console.log(`local mock server is running on port ${port}`)
  );
};
