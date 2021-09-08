const http = require('http');

const routes = require('./routes');

const server1 = http.createServer(routes.handler);
const server = http.createServer(routes.someText);

server.listen(3000);