# simple-local-mock 一个简单易用的前端 mock 服务器

## 安装

npm i simple-local-mock --save-dev

## 项目中使用

1. 项目根目录建立 mock 文件夹 注意！ 如果没有此文件夹会报-4058 的错误

2. 进入 mock 文件夹 建立测试 mock 文件 test.js

```js
module.exports = {
  code: '200',
  msg: '请求成功',
  data: 'success',
};
```

3. 在项目 package.json 中添加 scripts

```js
"mock":"simple-local-mock --port=${custom port,default 8786}"
```

4. 执行 npm run mock

5. 访问`127.0.0.1:${your custom port}/test`

## 更多功能说明

本项目是对 mock-middleware 的进一步封装，该插件的所有功能都可用
详情参看 https://github.com/luobotang/mock-middleware
