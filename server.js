const http = require('http');
const app = require('./app');

app.set('port', process.env.Port || 3000 );
const server = http.createServer(app);

server.listen(process.env.Port || 3000);
