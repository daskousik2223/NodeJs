//Create a server
/*Core modules - 
http - Launch a server and send requests to another node serve
https - Launch a SSL server
fs - Hndles file system
path - Deals with the file paths in local system
os - Deals with operating system level information
*/

const http = require('http'); //If you want to import a local file then start with ./ or /
const routes = require('./routes'); //Importing custom file
/*
const rqListener = (req, res) =>{
 //This function will be executed for every incoming request
}

http.createServer(rqListener);
*/

//Another way to create the server is using anonymous function

const server = http.createServer(routes);

server.listen(3000);