//Copyright 2015
//Licences MIT
//Contributors @dayuoba @kingzez
//Description:This is a chat server using nodejs to build.

var chat = require('./src/chat');
var config = require('./config/config.json');

chat.configure(config).run();

process.on('uncaughtException', function(err) {
	//TODO use log4js write down the uncaught exceptions
	console.log(err.stack)
});

