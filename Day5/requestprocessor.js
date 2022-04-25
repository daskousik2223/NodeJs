const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

//Registering a parser as req.body doesn't by default parse the data
app.use(bodyParser.urlencoded({extended : false}));
//This is used to give acess to expressjs to a file system folder
app.use(express.static(path.join(__dirname,'public'))); 
//To add a filter e.g., /admin for admin routes, the following line ca be used
//app.use('/admin', adminRouter);
//In this case localhost:3004/add-prod will not work but localhost:3004/admin/add-prod will work
app.use(adminData.routes);
app.use(shopRouter);

app.use((req, res, next) => {
    //res.status(404).sendFile(path.join(__dirname, 'views', 'pagenotfound.html'));
    //Using template engine pug
    res.status(404).render('pagenotfound',{pageNotFoundTitle: 'Page Not Found-404', 
        pageNotFoundMessage: 'Page not found, please check the url' });
});

app.listen(3006);