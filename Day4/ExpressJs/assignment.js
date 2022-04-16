const http = require('http');
const express = require('express');

const app = express();

app.use('/users',(req, res, next) => {
    res.send('<h1>"In the /users middleware function"</h1>');
});

app.use('/',(req, res, next) => {
    res.send('<h1>"In the / middleware function"</h1>');
});

/*
app.use((req, res, next) => {
    console.log("In the 1st middleware function");
    next();
});

app.use((req, res, next) => {
    console.log("In the 2nd middleware function");
    next();
});

app.use((req, res, next) => {
    console.log("In the 3rd middleware function");
    res.send('<h1>Returning fromm the middleware function</h1>');
});
*/
app.listen(3003);