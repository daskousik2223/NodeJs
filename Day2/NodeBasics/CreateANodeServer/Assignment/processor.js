const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>My assignment 1</title></head>');
        res.write('<body><h1>Welcome to my assignment page - 1</h1>');
        res.write('<form action="/create-user" method = "POST"><input type = "text" name = "username"><button type = "submit">Create</button></form>');
        res.write('</body></html>');
        return res.end();
    }
    if(url === '/users'){
        res.write('<html>');
        res.write('<head><title>My assignment 1</title></head>');
        res.write('<body><ul>');
        res.write('<li>User 1</li>');
        res.write('<li>User 2</li>');
        res.write('<li>User 3</li>');
        res.write('<li>User 4</li>');
        res.write('</ul></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/create-user'){
        const dataStream = [];
        req.on('data', (data) =>{
            dataStream.push(data);
        });
        req.on('end', () =>{

            const parsedBody = Buffer.concat(dataStream).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);

            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();

        });
    }

};

module.exports = requestHandler;