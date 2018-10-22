var express = require('express');

var index = require('./routes/index'); //이와 같이 연결되는 route method를 기술해줍니다

var app = express();

app.use('/', index);//사용할 route express와 연결해줍니다

app.listen(8000);
console.log('server start');
module.exports = app;