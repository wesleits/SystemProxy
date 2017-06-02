var http = require('http');



http.createServer(function (req, res) 
{
	res.writeHead(200, {'Content-Type': 'text/plain'});

	var options = {
		host: 'arenacosplay.tempsite.ws',
		path: '/ip'
	}
	var request = http.request(options, function (cres) {
		var data = '';
		cres.on('data', function (chunk) {
			data += chunk;
		});
		cres.on('end', function () {
			res.end(data);

		});
	});
	request.on('error', function (e) {
		res.end(e.message);
	});
	request.end();

	

})
.listen(3128); 
console.log('Server running!');