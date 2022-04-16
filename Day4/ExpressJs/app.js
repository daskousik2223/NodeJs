const http = require('http');
const express = require('express');

const expressApp = express();

//req = request, res = response and next is a function that can be executed next
expressApp.use((req, res, next) => {
    console.log('In the middleware!');
    next();
});

expressApp.use('/add-prod',(req, res, next) => {
    res.send('<h1>Add product page</h1>');
});

expressApp.use('/',(req, res, next) => {
    res.send('<h1>This is a old fashioned html</h1>');
});

expressApp.listen(3002);

//Next 2 lines can be replaced by the above line
//const server = http.createServer(expressApp);
//server.listen(3002);