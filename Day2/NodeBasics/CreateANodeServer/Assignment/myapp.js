const http = require('http');
const processor = require('./processor');


const server = http.createServer(processor);
server.listen(3001);