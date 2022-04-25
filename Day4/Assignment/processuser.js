const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const defaultRouter = require('./routes/default');
const userRouter = require('./routes/user');
const path = require('path');
const rootDir = require('./util/path');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(defaultRouter);
app.use(userRouter);
app.use((req, res, next) =>{
    res.status(404).sendFile (path.join(rootDir, 'views', 'pagenotfound.html'));
});
app.listen(3005);