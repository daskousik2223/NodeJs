//Routing requests

const fs = require('fs');

const requestHndler = (req, res) =>{
    const url = req.url
    const method = req.method;
if(url === '/'){ // === means both side the data type and value should match
    res.write('<html>');
    res.write('<head><title>Request Routing Example</title></head>');
    res.write('<body><h1>Nodemon JS Example</h1><form action="msg" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
}

//Requestion redirection
if(url === '/msg' && method === 'POST'){
    const body = [];
  
    req.on('data', chunk => {
        console.log(chunk);
        body.push(chunk);
    }); //Helps us to listen for the incoming data from request

    req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        //fs.writeFileSync('message.txt', message); //Synchronous way to write files and is okay for small files
        //Best practice is to use the writeFile method
        fs.writeFile('message.txt', message, (err) =>{//This is another event listener 
                                                      //and excutes once the file writing is done
            res.statusCode = 302;
            res.setHeader('Location', '/');
            //res.writeHead(302,{}); alternative way to set the response properties
            return res.end();
        });
    });
}
res.write('<html>');
res.write('<head><title>First Node Js Page</title></head>');
res.write('<body><h1>Welcome to Node JS server</h1></body>');
res.write('</html>');
res.end();

};

//Process of exporting

module.exports = requestHndler; //module is globaly available

//If we need to export multiple stuff. In the calling files the routes needs to be considered as an object

/*
module.exports = {
    handler: requestHandler,
    someText: 'Some hardcoded text',
    etc
};
*/

//Another way is
//module.exports.handler = requestHandler;
//module.exports.someText = 'Some hardcoded text';

//Short cut supported by Node JS
//exports.handler = requestHandler;
//exports.someText = 'Some hardcoded text';
