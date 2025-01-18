const http = require('http');

const requestListener = async (request, response) => {
  try {
    response.writeHead(200);
    response.end('Hello, World!');
  } catch (error) {
    console.error('Error:', error);
    response.writeHead(500);
    response.end('Internal Server Error');
  }
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server started on port 8080');