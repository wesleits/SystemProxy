var http = require('http');
var os = require('os');


http.createServer(function (req, res) 
{
	res.writeHead(200, {'Content-Type': 'text/plain'});

	/*
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
	*/
	
	var interfaces = os.networkInterfaces();
	var addresses = [];
	for (var k in interfaces) {
		for (var k2 in interfaces[k]) {
			var address = interfaces[k][k2];
			if (address.family === 'IPv4' && !address.internal) {
				addresses.push(address.address);
			}
		}
	}

	res.end(addresses);
})
.listen(3128); 
console.log('Server running!');