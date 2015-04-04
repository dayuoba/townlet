var express = require('express');
var http = require('http');
var socketio = require('socket.io');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index.js');
var ioroutes = require('./routes/ioindex.js');


module.exports = function(application) {
	var webServer = {};
	webServer.STATUS = 0;
	var app = express();

	webServer.init = function() {
		// view engine setup
		app.set('views', path.join(__dirname, '../../../public/views'));
		app.set('view engine', 'ejs');
		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({
			extended: false
		}));
		app.use(cookieParser());
		app.use(express.static(path.join(__dirname, '../../../public')));
		app.use('/', routes);
		this.STATUS = 1;
	};

	webServer.start = function() {
		var server = http.Server(app);
		var io = socketio(server);
		ioroutes(io);
		server.listen(3000);
		this.STATUS = 2;
	};

	webServer.afterStart = function() {
		console.log('webServer started, listening port 3000');
		console.log('webSocketServer started, listening port 3000');

	};

	webServer.stop = function() {
		this.STATUS = 0;
	};
	return webServer;
};