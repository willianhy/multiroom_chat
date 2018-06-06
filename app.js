var app = require('./config/server');

var server = app.listen(8090, function(){
	console.log('Servidor online');
});

require('socket.io').listen(server);