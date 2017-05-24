var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('eu amo a millene!');
}).listen(3128); 
console.log('Server running at http://localhost:80/');